#!/usr/bin/env python3
"""This module contains a method use to implement mongodb"""
from pymongo import MongoClient


def display_information(mongo_collection):
    """Provides some stats about Nginx logs"""
    print("{} logs".format(mongo_collection.count_documents({})))
    print("Methods:")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        print("\tmethod {}: {}".format(
            method, mongo_collection.count_documents({"method": method})))

    print("{} status check".format(mongo_collection.count_documents(
        {"method": methods[0], "path": "/status"})))

    print("IPs:")

    pipeline = [
        {"$group": {
            "_id": "$ip",
            "count": {"$sum": 1},
        }},
        {"$sort": {"count": -1}}
    ]

    top_ips = list(mongo_collection.aggregate(pipeline))

    for ip in top_ips[:10]:
        print("\t{}: {}".format(ip.get('_id'), ip.get('count')))


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    display_information(nginx_collection)
