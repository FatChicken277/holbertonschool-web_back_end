#!/usr/bin/env python3
"""Define a function - task_wait_n"""

import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Calls task_wait_random n times and returns the result"""
    calls = [task_wait_random(max_delay) for _ in range(n)]
    result = await asyncio.gather(*calls)
    return sorted(result)
