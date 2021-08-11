#!/usr/bin/env python3
"""
0-simple_helper_function.py - This module contains index_range method.
"""


def index_range(page: int, page_size: int) -> tuple:
    """Return a tuple of size two containing a start index and an end index"""
    return (((page - 1) * page_size), page * page_size)
