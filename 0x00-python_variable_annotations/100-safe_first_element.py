#!/usr/bin/env python3
"""Define a type-annotated function - safe_first_element"""

from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """return values with the appropriate types"""
    if lst:
        return lst[0]
    else:
        return None
