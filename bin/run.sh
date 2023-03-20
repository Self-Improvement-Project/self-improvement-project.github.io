#!/bin/bash

# set current file path
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ROOT_DIR="$SCRIPT_DIR"/..

# silent commands
pushd () {
    command pushd "$@" > /dev/null
}

# silent commands
popd () {
    command popd "$@" > /dev/null
}

# traverse to root directory
pushd "$ROOT_DIR"
  # run webapp locally
  yarn start
popd
