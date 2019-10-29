# InsertionSort
Coding challenge #27

## Challenge
The challenge is to create a function that will sort an array with the merge sort method.

## Approach & Efficiency 
The solution uses multiple loops but none of them are nested so it's linear. It works by first splitting the array in half and recursively  sorting each half. It then uses a while loop to compare the entries of each half and reconstructs the original array based on which half has lesser values. If any values haven't been added after the while loop, the remaining values are added to the original array.