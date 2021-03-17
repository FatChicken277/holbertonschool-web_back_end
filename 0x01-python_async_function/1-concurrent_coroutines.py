#!/usr/bin/env python3
"""Define a asynchronous coroutine - wait_n"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Calls wait_random n times and returns the result"""
    calls = [wait_random(max_delay) for _ in range(n)]
    result = await asyncio.gather(*calls)
    return sorted(result)
