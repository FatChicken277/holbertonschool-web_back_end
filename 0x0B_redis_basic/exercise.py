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


class Cache():
    """Cache class"""

    def __init__(self) -> None:
        """Class constructor"""

        self._redis = redis.Redis()
        self._redis.flushdb()

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
