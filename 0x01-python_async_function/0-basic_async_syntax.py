#!/usr/bin/env python3
"""Define a asynchronous coroutine - wait_random"""

import asyncio
from random import uniform


async def wait_random(max_delay: int = 10) -> float:
    """Waits between 0 and max_delay seconds and returns it"""
    rdm = uniform(0, max_delay)
    await asyncio.sleep(rdm)
    return rdm
