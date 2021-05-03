#!/usr/bin/env python3
"""exercise module"""

import redis
import typing
import uuid


class Cache():
    """Cache class"""

    def __init__(self) -> None:
        """class constructor"""

        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data) -> str:
        """generate a random key and store in redis"""

        key = str(uuid.uuid4())
        self._redis.mset({key: data})

        return key
