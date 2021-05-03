#!/usr/bin/env python3
"""2-lifo_cache.py module"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """This class represent a caching system"""

    def __init__(self):
        """Init"""

        super().__init__()

    def put(self, key, item):
        """Assign to the dictionary"""

        if key and item:
            self.cache_data[key] = item

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            last = list(self.cache_data)[-2]
            del self.cache_data[last]
            print("DISCARD:", last)

    def get(self, key):
        """Return the value linked to the key"""

        return self.cache_data.get(key)
