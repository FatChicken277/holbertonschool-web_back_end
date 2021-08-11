#!/usr/bin/env python3
""" 1-simple_pagination.py
This module contains get_page method.
"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert(type(page) is int and page > 0)
        assert(type(page_size) is int and page_size > 0)

        return self.dataset()[(page - 1) * page_size:page * page_size]
