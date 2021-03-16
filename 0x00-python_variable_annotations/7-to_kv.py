#!/usr/bin/env python3
"""Define a type-annotated function - to_kv"""

from typing import List, Tuple, Union

X = Union[int, float]


def to_kv(k: str, v: X) -> Tuple[str, float]:
    """Takes a str and int/float and returns a tuple of str and number"""
    return (k, v*v)
