#!/bin/bash

cd "$(dirname "$(readlink -f "$0")")/.."

for F in chip cpu asm vm compiler bitmap guide util about; do
  mkdir build/$F
  cp build/index.html build/$F
done