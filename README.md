# React Native Dimensions API Returns Undefined or Null

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `undefined` or `null` unexpectedly, leading to layout problems.  The solution shows how to handle this using state and the `useEffect` hook to ensure dimensions are available before attempting to use them.

## Problem

The `Dimensions` API in React Native provides screen dimensions. However, in certain scenarios, it can return `undefined` or `null`, particularly during initial rendering or during rapid component updates. This inconsistency can result in layout errors, crashes, or unexpected behavior.

## Solution

The solution involves using state to store the dimensions and the `useEffect` hook to fetch the dimensions after the component mounts.  The state ensures that the dimensions are only accessed after they are properly fetched, avoiding undefined or null values.  This approach offers a reliable way to work with screen dimensions in React Native.

## Setup

1. Clone the repository
2. `npm install` or `yarn install`
3. Run the app on an emulator or device

Feel free to modify and test the code.