---
layout: post
title: "第k个数"
date: 2025-01-31 12:00:00
description: 使用快排的思想寻找数组中第k大的数
tags: code algorithm acwing
categories: learning-notebook
---

# 找到第k个数

## 一些基本的量

- $S_l$表示一次分段后左边段中元素的个数
- $S_r$表示一次分段后右边段中元素的个数

## 基本原理

1. 当$k \leq S_l$时，只需要递归左边段
2. 当$k  > S_l$时，只需要递归右边段，寻找第$k - S_l$个数

## 小的注意事项

- 在C++中，当局部变量和全局变量重名时，会优先使用局部变量
- 注意哇！在这里面上传blog，代码块需要和上面文本的空一行才可以正常且高亮显示

```c++
#include <bits/stdc++.h>
using namespace std;

int N = 1e5 + 100;
int n, k;
int q[N];

int quick_sort(int l, int r, int k){
	if(l == r) return q[l];

	int x = q[l], i = l - 1, j = r + 1;
	while(i < j){
		do i++; while(i < x);
		do j--; while(j > x);
		if(i < j) swap(q[i], q[j]);
	}

	int sl = j - l + 1;
	if(k <= sl) return quick_sort(0, j, k);

	return quick_sort(j + 1, r, k - sl);
}
int main(){
	cin >> n >> k;
	for(int i  = 0; i < n; ++i)
	{
		scanf("%d", &q[i]);
	}

	cout << quick_sort(0, n - 1, k) << endl;

	return 0;
}

```
