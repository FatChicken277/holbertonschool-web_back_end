#!/usr/bin/env python3
"""Define a type-annotated function - sum_mixed_list"""

from typing import List, Union

X = Union[int, float]


def sum_mixed_list(mxd_lst: List[X]) -> float:
    """Takes a list of float as argument and returns their sum as a float"""
    return sum(mxd_lst)
