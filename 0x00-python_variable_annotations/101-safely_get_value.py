#!/usr/bin/env python3
"""Define a type-annotated function - safe_first_element"""

from typing import TypeVar, Union, Mapping, Any

T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any,
                     default: Union[T, None] = None) -> Union[Any, T]:
    """return values with the appropriate types"""
    if key in dct:
        return dct[key]
    else:
        return default
