#!/usr/bin/env python3
"""Define a type-annotated function - safe_first_element"""

from typing import Tuple, List
from math import floor


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """return values with the appropriate types"""
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, floor(3.0))
