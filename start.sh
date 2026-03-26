#!/bin/bash

apt update && apt install -y curl unzip

curl -L -o v2ray.zip https://github.com/v2fly/v2ray-core/releases/latest/download/v2ray-linux-64.zip

unzip v2ray.zip

chmod +x v2ray

./v2ray -config=config.json
