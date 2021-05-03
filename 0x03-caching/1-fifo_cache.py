#!/usr/bin/env python3
"""1-fifo_cache.py module"""

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """This class represent a caching system"""

    def __init__(self):
        """Init"""

        super().__init__()

    def put(self, key, item):
        """Assign to the dictionary"""

        if key and item:
            self.cache_data[key] = item

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            first = list(self.cache_data)[0]
            del self.cache_data[first]
            print("DISCARD:", first)

    def get(self, key):
        """Return the value linked to the key"""

        return self.cache_data.get(key)
