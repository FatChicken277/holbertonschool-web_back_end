#!/usr/bin/env python3
"""Define a type-annotated function - make_multiplier"""

from typing import List, Tuple, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by multiplier"""
    def multiplies(num: float) -> float:
        return num * multiplier

    return multiplies
