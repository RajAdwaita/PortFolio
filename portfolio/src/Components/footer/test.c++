#include <bits/stdc++.h>
using namespace std;

int main()
{
    std::ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int s = 0;
    int n = 23456;
    int i = 0;
    while (n != 0)
    {
        int d = n % 10;
        s = pow(10, i) * d + s;
        // s = d + s * 10;
        i++;
        n = n / 10;
    }
    cout << s;

    return 0;
}