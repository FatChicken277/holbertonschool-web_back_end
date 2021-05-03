#!/usr/bin/env python3
"""exercise module"""

import redis
import uuid
from typing import Union, Callable


class Cache():
    """Cache class"""

    def __init__(self) -> None:
        """class constructor"""

        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """generate a random key and store in redis"""

        key = str(uuid.uuid4())
        self._redis.mset({key: data})

        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[
            str, bytes, int, float]:
        """method that take a key string and an optional Callable"""

        if fn:
            return fn(self._redis.get(key))
        return self._redis.get(key)

    def get_str(self, data: str) -> str:
        """return a string correct conversion"""

        return self._redis.get(data).decode('utf-8')

    def get_int(self, data: str) -> int:
        """return a int correct conversion"""

        return int(self._redis.get(data))
