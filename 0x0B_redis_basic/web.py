#!/usr/bin/env python3
"""web module"""

import redis
import requests
from typing import Callable
from functools import wraps


def access_counter(method: Callable) -> Callable:
    """access_counter"""

    @wraps(method)
    def count_and_expirate(*args, **kwds):
        """count_and_expirate wrapped function"""
        r = redis.Redis()
        url = r.get(args[0])
        r.incr('count:' + url)
        if not url:
            url = method(*args, **kwds)
            r.setex(args[0], 10, url)
        return url

    return count_and_expirate


@access_counter
def get_page(url: str) -> str:
    """Obtain HTML content of a URL and returns it"""
    return requests.get(url).text
