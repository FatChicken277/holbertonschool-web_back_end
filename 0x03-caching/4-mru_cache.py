#!/usr/bin/env python3
"""4-mru_cache.py module"""

from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """This class represent a caching system"""

    def __init__(self):
        """Init"""

        super().__init__()
        self.least = []

    def put(self, key, item):
        """Assign to the dictionary"""

        if key and item:
            if key in self.cache_data:
                self.least.remove(key)

            self.cache_data[key] = item
            self.least.append(key)

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            least = self.least.pop(-2)
            del self.cache_data[least]
            print("DISCARD:", least)

    def get(self, key):
        """Return the value linked to the key"""

        if key in self.cache_data:
            self.least.remove(key)
            self.least.append(key)

        return self.cache_data.get(key)
