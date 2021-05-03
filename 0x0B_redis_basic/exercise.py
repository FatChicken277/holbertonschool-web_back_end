#!/usr/bin/env python3
"""exercise module"""

import redis
import uuid
from functools import wraps
from typing import Union, Callable, Optional


def count_calls(method: Callable) -> Callable:
    """Returns a Callable"""

    key = method.__qualname__

    @wraps(method)
    def counter(self, *args, **kwds):
        """counter wrapped function"""
        self._redis.incr(key)
        return method(self, *args, **kwds)

    return counter


def call_history(method: Callable) -> Callable:
    """Store the history of inputs and outputs for a particular function"""

    @wraps(method)
    def output(self, *args, **kwds):
        """output wrapped function"""
        out = method(self, *args, **kwds)
        self._redis.rpush(method.__qualname__ + ':inputs', str(args))
        self._redis.rpush(method.__qualname__ + ':outputs', out)
        return out

    return output


def replay(method: Callable):
    """Display the history of calls of a particular function"""
    r = redis.Redis()
    method_name = method.__qualname__

    count = r.get(method_name).decode('utf-8')
    inputs = r.lrange(method_name + ':inputs', 0, -1)
    outputs = r.lrange(method_name + ':outputs', 0, -1)

    print('{} was called {} times:'.format(method_name, count))

    for inp, out in zip(inputs, outputs):
        print('{}(*{}) -> {}'.format(
            method_name, inp.decode('utf-8'), out.decode('utf-8')))


class Cache():
    """Cache class"""

    def __init__(self) -> None:
        """Class constructor"""

        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Generate a random key and store in redis"""

        key = str(uuid.uuid4())
        self._redis.mset({key: data})

        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[
            str, bytes, int, float]:
        """Method that take a key string and an optional Callable"""

        if fn:
            return fn(self._redis.get(key))
        return self._redis.get(key)

    def get_str(self, data: str) -> str:
        """Return a string correct conversion"""

        return self._redis.get(data).decode('utf-8')

    def get_int(self, data: str) -> int:
        """Return a int correct conversion"""

        return int(self._redis.get(data))
