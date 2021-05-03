#!/usr/bin/env python3
"""0-basic_cache.py module"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """This class represent a caching system"""

    def put(self, key, item):
        """Assign to the dictionary"""

        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """Return the value linked to the key"""

        return self.cache_data.get(key)
