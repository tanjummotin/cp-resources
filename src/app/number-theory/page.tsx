"use client";

import { useState } from "react";
const topics = [
  {
    name: "GCD",
    id: "gcd",
    code: `#include<bits/stdc++.h>
using namespace std;
long long gcd(long long a,long long b) {
   if(a==0) return b;
    else if(b==0) return a;
    else if(a%b==0) return b;
    return gcd(b,a%b);
}
int main() {
    long long a,b,t;
    cin>>t;
    while(t--){
            cin>>a>>b;
            cout<<gcd(a,b)<<endl;
    }
}`,
    resources: [],
    complexity: { time: "O(log(min(a, b)))", space: "O(1)" },
    comments: "",
    related_problems:[]
  },
  {
    name: "LCM for array",
    id: "lcm-for-array",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
long long gcd(long long a,long long b)
{
    if(a==0)
        return b;
    else if(b==0)
        return a;
    else if(a%b==0)
        return b;
    return gcd(b,a%b);
}
ll findlcm(ll temp[],int x)
{
    ll ans=temp[0];
    for(int i=1; i<x; i++)
    {
        ans=(temp[i]*ans)/(gcd(temp[i],ans));
    }
    return ans;
}
int main()
{
   ll n;
   cin>>n;
   ll arr[n];
   for(int i=0;i<n;i++)
    cin>>arr[i];
    cout<<findlcm(arr,n)<<endl;;
}
`,
    resources: ["https://www.geeksforgeeks.org/lcm-of-given-array-elements/"],
    complexity: { time: "O(n)", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "Prime factorization of a int",
    id: "prime-factorization",
    code: `#include<bits/stdc++.h>
#define mx 32000
using namespace std;
typedef long long ll;
 vector<ll>prime;
 vector<ll>factors;
 void sieve()
 {
     bool flag[mx];
     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<=mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<=mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
 void factorize(ll n)
 {
     ll sqrtn=sqrt(n);
     for(int i=0;i<prime.size()&& prime[i]<=sqrtn;i++)
     {
         if(n%prime[i]==0)
         {
             while(n%prime[i]==0)
             {
                 n/=prime[i];
                 factors.push_back(prime[i]);
             }
             sqrtn=sqrt(n);
         }
     }
     if(n!=1)
     {
         factors.push_back(n);
     }
 }
int main()
{
    ll n;
    cin>>n;
    sieve();
    factorize(n);
    for(int i=0;i<factors.size();i++)
    {
        cout<<factors[i]<<" ";
    }
}`,
    resources: ["https://forthright48.com/prime-factorization-of-integer/"],
    complexity: { time: "O(sqrt(n))", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "Prime factorization of factorial",
    id: "prime-factorization-factorial",
    code: `#include<bits/stdc++.h>
#define mx 32000
using namespace std;
typedef long long ll;
 vector<ll>prime;
 vector<ll>factors;
 void sieve()
 {
     bool flag[mx];
     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<=mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<=mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
 void FactFactorize(int n)
 {
     for(int i=0;i<prime.size() && prime[i]<=n;i++)
     {
         ll p=prime[i];
         ll freq =0;
         ll x=n;
         while(x/p)
         {
             freq+=x/p;
            x=x/p;
         }
         cout<<prime[i]<<" "<<freq<<endl;
     }
 }
int main()
{
    ll n;
    cin>>n;
    sieve();
    FactFactorize(n);
}`,
    resources: ["https://forthright48.com/prime-factorization-of-factorial/"],
    complexity: { time: "O(n log log n)", space: "O(n)" },
    comments: "",related_problems:[]
  },
  {
    name: "How many times a prime occur in n!",
    id: "prime-occurrence-factorial",
    code:`#include<bits/stdc++.h>
#define mx 32000
using namespace std;
typedef long long ll;
 vector<ll>prime;
 vector<ll>factors;
 void sieve()
 {
     bool flag[mx];
     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<=mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<=mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
 ll FactorialPrimePower(ll n,ll p)
 {

         ll x=n;
         ll freq =0;
         while(x)
         {
             freq+=x/p;
             x=x/p;
             cout<<x<<endl;
         }
        return freq;

 }
int main()
{
    ll n,p;
    cin>>n>>p;
    sieve();
    n=9*1e18;
    cout<<FactorialPrimePower(n,p)<<endl;
}`,
    resources: ["https://forthright48.com/prime-factorization-of-factorial/"],
    complexity: { time: "O(log n)", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "Number of divisors of a int",
    id: "number-divisors-int",
    code: `#include<bits/stdc++.h>
#define mx 1000000
using namespace std;
typedef long long ll;
 vector<ll>prime;
 void sieve()
 {
     bool flag[mx];
     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<=mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<=mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
ll NumOfDivisors(ll n)
 {
     ll sqrtn=sqrt(n);
     ll c=0,ans=1;
     for(int i=0;i<prime.size()&& prime[i]<=sqrtn;i++)
     {
         if(n%prime[i]==0)
         {c=0;
             while(n%prime[i]==0)
             {
                 n/=prime[i];
                 c++;
             }
             sqrtn=sqrt(n);
             ans*=(c+1);
         }
     }

     if(n!=1 )
     {
         ans*=2;
     }
     return ans;
 }
int main()
{
    sieve();

        ll n;
        scanf("%lli",&n);
        printf("%lli\n",NumOfDivisors(n));
}
`,
    resources: ["https://cp-algorithms.com/algebra/divisors.html", "https://www.geeksforgeeks.org/total-number-divisors-given-number/"],
    complexity: { time: "O(sqrt(n))", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "A large num is divisible or not by a int",
    id: "large-num-divisibility",
    code:`#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=1;i<=t;i++)
    {
        string a;
        ll b,r=0,p;
        cin>>a>>b;
        if(a[0]=='-')///if the number is negative,remove the negative sign
            a.erase(0,1);
        for(int i=0;i<a.size();i++)///see the division process by hand
        {
            p=r*10+(a[i]-'0');
            r=p%b;
        }
       printf("Case %d: ",i);
        if(r==0)
            cout<<"divisible"<<endl;
        else
            cout<<"not divisible"<<endl;

    }
}
`,
    resources: ["http://nayeemmollickjoy.blogspot.com/2017/07/httpwww.html"],
    complexity: { time: "O(n)", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "Num of trailing zeros in nCr * p^q",
    id: "trailing-zeros-ncr",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
 ll FactorialPrimePower(ll n,ll p)///How many times prime p occur in n!
 {

         ll x=n;
         ll freq =0;
         while(x)
         {
             freq+=x/p;
             x=x/p;
         }
        return freq;

 }
 ll PrimePower(ll n,ll p)///How many times a prime occur in n
 {

         ll freq =0;
         while(n%p==0)
         {
             freq++;
             n=n/p;

         }
        return freq;
 }
int main()
{
    int t;
    scanf("%d",&t);
    for(int te=1;te<=t;te++)
    {
        ll n,r,p,q,i,j,k,l,m,o,x,y;
        scanf("%lli%lli%lli%lli",&n,&r,&p,&q);
        ///nCr=n!/(r!*(n-r)!)
        i=FactorialPrimePower(n,2);
        j=FactorialPrimePower(n,5);
        k=FactorialPrimePower(r,2);
        l=FactorialPrimePower(r,5);
        m=FactorialPrimePower(n-r,2);
        o=FactorialPrimePower(n-r,5);
        ///p^q
        x=q*PrimePower(p,2);
        y=q*PrimePower(p,5);
       ll numOf2=i-k-m+x;
       ll numOf5=j-l-o+y;
       ll ans=min(numOf2,numOf5);
       printf("Case %d: %lli\n",te,ans);


    }

}
`,
    resources: ["https://shikhorroy.wordpress.com/2014/02/22/wp-mep2mliv-6g/"],
    complexity: { time: "O(log n)", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "Trailing zeros in n!",
    id: "trailing-zeros-factorial",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll findzero(ll n)///count how many 5 in n.The number of 5 present=the number of trailing zeros because 2*5 pair make trailing zeros.In a number always number of 2 is
{                   ///always greater than 5 .So,we counted number of 5.
    ll x=n;
    ll freq=0;
    while(x)
    {
        freq+=x/5;
        x=x/5;

    }
    return freq;
}
int main()
{
    int t;cin>>t;
    while(t--){
    ll n;
    cin>>n;
    cout<<findzero(n)<<endl;;
    }

}
`,
    resources: [],
    complexity: { time: "O(log n)", space: "O(1)" },
    comments: "",related_problems:[]
  },
  {
    name: "Smallest number with at least n trailing zeros in factorial",
    id: "smallest-num-trailing-zeros",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll trailingZeroInFactorial(ll num)
{
    ll x=num;
    ll freq=0;
    while(x)
    {
        freq+=x/5;
        x=x/5;

    }
    return freq;
}
ll smallestNum(ll q)
{
    if(q==1)
        return 5;
        ll low=0;
        ll high=5*q;
        while(low<high)
        {
            ll mid=(low+high) >> 1;///>> 1 means divide by 2;
            if(trailingZeroInFactorial(mid)>=q)
                high=mid;
            else
                low=mid+1;
        }
    return low;
}
int main()
{
    int t=100;
    while(t--)
    {
        ll n;
        cin>>n;
        cout<<smallestNum(n)<<endl;
    }

}`,
    resources: ["https://www.geeksforgeeks.org/smallest-number-least-n-trailing-zeroes-factorial/"],
    complexity: { time: "O(log^2 n)", space: "O(1)" },
    comments: "",related_problems:[]
  },
{
    name: "Euler phi",
    id: "euler-phi",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll eulerPhi(ll n)
{
    ll result=n;
    for(int i=2;i*i<=n;i++)
    {
        if(n%i==0)
        {
            while(n%i==0)
                n/=i;
            result-=result/i;
        }
    }
    if(n>1)
        result-=result/n;
    return result;
}
int main()
{
    ll n;
    cin>>n;
    cout<<eulerPhi(n)<<endl;

}`,
    resources: ["https://www.youtube.com/watch?v=u8xQUtxUJeg", "https://cp-algorithms.com/algebra/phi-function.html"],
    complexity: { time: "O(sqrt(n))", space: "O(1)" },
    comments: "",related_problems:["https://www.spoj.com/problems/ETF/vn/"]
},
  {
    name: "Euler phi precomputation(from 1 to n)",
    id: "euler-phi-precomputation(from 1 to n)",
    code: `#include<bits/stdc++.h>
#define mx 1000005
using namespace std;
typedef long long ll;
ll phi[mx];
void phi_1_to_n( )
{
    for(int i=0;i<mx;i++)phi[i]=i;
    for(int i=2;i<mx;i++)
    {
        if(phi[i]==i)///a prime
        {
            for(int j=i;j<mx;j+=i)
            {
                phi[j]-=phi[j]/i;
            }
        }
    }
}
int main()
{
    int t;
    cin>>t;
    phi_1_to_n();
    while(t--)
    {
        ll n;
        cin>>n;
        cout<<phi[n]<<endl;
    }
}
`,
    resources: ["https://www.youtube.com/watch?v=Fv77-SOTxy8","https://cp-algorithms.com/algebra/phi-function.html","https://turing13.com/code-book/#ET2"],
    complexity: { time: "O(n log log n)", space: "O(n)" },
    comments: "",related_problems: ["https://lightoj.com/problem/mathematically-hard"]
  },
  {
    name: "Find the largest number d such that when the element of the array are divided by d leaves the same remainder",
    id: "largest-number-d",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main()
{
    ll ar[1005];
    while(1)
    {
        cin>>ar[0];
        if(ar[0]==0)
            break;
        else
        {
            ll index=1,diff,g=0;///as gcd(0,x)=x;
            while(1)
            {
                cin>>ar[index];
                if(ar[index]==0)
                    break;
                else
                    index++;
            }

            for(int i=1; i<index; i++)
            {
                diff=ar[i]-ar[i-1];
                g=__gcd(g,diff);
            }
            ///if gcd is negative
            if(g<0)g=-1*g;
            cout<<g<<endl;
        }
    }

}
`,
    resources: ["https://forthright48.com/uva-10407-simple-division/"],
    complexity: {},
    comments: "",related_problems: ["https://onlinejudge.org/external/104/10407.pdf"]
  },
  {
    name: "Sum of divisors of a int",
    id: "sum-of-divisors",
    code: `#include<bits/stdc++.h>
#define mx 1000000
using namespace std;
typedef long long ll;
 vector<ll>prime;
 ll bigmod(ll a,ll b)
{
    if(b==0)
        return 1;
    ll x=bigmod(a,b/2);
    x=(x*x);
    if(b%2==1)
        x=(x*a);
    return x;
}
 void sieve()
 {
     bool flag[mx];
     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<=mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<=mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
ll SumOfDivisors(ll n)
 {
     ll sqrtn=sqrt(n);
     ll c=0,ans=1;
     for(int i=0;i<prime.size()&& prime[i]<=sqrtn;i++)
     {
         if(n%prime[i]==0)
         {c=0;
             while(n%prime[i]==0)
             {
                 n/=prime[i];
                 c++;
             }
             sqrtn=sqrt(n);
             ans*=((bigmod(prime[i],c+1)-1)/(prime[i]-1));
         }
     }

     if(n!=1 )
     {
         ans*=((bigmod(n,2)-1)/(n-1));
     }
     return ans;
 }
int main()
{
    sieve();

        ll n;
        scanf("%lli",&n);
        printf("%lli\n",SumOfDivisors(n));
}
`,
    resources: ["https://cp-algorithms.com/algebra/divisors.html", "https://www.geeksforgeeks.org/total-number-divisors-given-number/"],
    complexity: {},
    comments: "",related_problems:[]
  },
  {
    name: "Multiflying two large numbers(without big int)",
    id: "mul-large-num",
    code: `#include<bits/stdc++.h>
#define mx 600
using namespace std;
typedef long long ll;
int main()
{
    string s1,s2;
    while(cin>>s1)///verify the whole process by multiplying two numbers by hand
    {
        cin>>s2;
        reverse(s1.begin(),s1.end());
        reverse(s2.begin(),s2.end());
        ll a[mx];
        for(int i=0;i<mx;i++)
            a[i]=0;
        for(int i=0;i<s2.size();i++)
        {
            for(int j=0;j<s1.size();j++)
            {
                a[i+j]+=(s1[j]-'0')*(s2[i]-'0');
            }
        }

        for(int i=0;i<mx;i++)
        {
            a[i+1]=a[i+1]+(a[i]/10);
            a[i]=a[i]%10;
        }
        int i;
        for( i=mx-1;i>0;i--)
        {
            if(a[i]!=0)
                break;
        }

        for(int j=i;j>=0;j--)
            cout<<a[j];
        cout<<endl;


    }
}`,
    resources: [],
    complexity: {},
    comments: "",related_problems:["https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1047"]
  },
  {
    name: "Segmented Sieve",
    id: "segmented-sieve",
    code:`#include<bits/stdc++.h>
#define mx 32000
using namespace std;
typedef long long ll;
 vector<int>prime;
 void sieve()
 {
     bool flag[mx];
     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<=mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<=mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
 void segsieve(ll l,ll r)
 {
     bool pri[r-l+1];
     ll cupri,base;
     memset(pri,0,sizeof(pri));
    if(l==1)
        pri[0]=1;
     for(int i=0;prime[i]*prime[i]<=r;i++)
     {//cout<<"in2"<<endl;
         cupri=prime[i];
         base=(l/cupri)*cupri;
         if(base<l)
            base +=cupri;
         for(ll j=base;j<=r;j+=cupri)
         {
             pri[j-l]=1;
         }
         if(base==cupri)
            pri[base-l]=0;
     }
     for(int i=0;i<r-l+1;i++)
     {
         if(pri[i]==0)
            cout<<i+l<<endl;
     }
 }
int main()
{
   int t;
   cin>>t;
   sieve();
  for(int k=1;k<=t;k++)
    {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
        ll m,n;
        scanf("%lli%lli",&m,&n);

        segsieve(m,n);
        //sieve();
        if(k!=t)
            cout<<endl;
    }
    return 0;


}`,
    resources: [],
    complexity: { time: "O(n log log n)", space: "O(n)" },
    comments: "",related_problems:[]
  },
  {
    name: "Bitwise sieve",
    id: "Bitwise-sieve",
    code: `#include<bits/stdc++.h>
#define mx 100000005
using namespace std;
typedef long long ll;
int status[mx/32+2];
vector<ll>prime;
bool check(int n,int pos)
{
    return n & (1<<pos);
}
int Set(int n,int pos)
{
    n=n | (1<<pos);
    return n;
}
void bitwise_sieve()
{
    int i,j,sqrtMx;
    sqrtMx=sqrt(mx);
    for(int i=3;i<=sqrtMx;i+=2)
    {
        if(check(status[i>>5],i&31)==0)
        {
            for(j=i*i;j<=mx;j+=(i<<1))///j+=(i<<1) => j+=2*i
            {
                status[j>>5]=Set(status[j>>5],j&31);
            }
        }
    }
    prime.push_back(2);
    for(int i=3;i<=mx;i+=2)
    {
        if(check(status[i>>5],i&31)==0)
            prime.push_back(i);
    }

}
int main()
{
    bitwise_sieve();
   // for(int i=0;i<prime.size();i++)
       // cout<<prime[i]<<" ";
        cout<<prime.size();
    cout<<endl;

}
`,
    resources: ["https://codeforces.com/blog/entry/73490"],
    complexity: {},
    comments: "find prime upto 10^8",related_problems:[]
  },
  {
    name: "Lcm from 1 to n",
    id: "lcm-1-n",
    code: `#include<bits/stdc++.h>
#define mx 100000005
using namespace std;
typedef unsigned ll;
ll status[mx/32+2];
//ll mod=4294967296;
 ll prime[5761455+5];
ll mul[5761455+5];///number of prime upto mx is 5761455
ll c=1;
ll bigmod(ll a,ll b)
{
    //uint64_t m=4294967296;
    if(b==0)
        return 1;
    ll x=bigmod(a,b/2);
    x=(x*x);
    if(b%2==1)
        x=(x*a);
    return x;
}
bool check(int n,int pos)
{
    return n & (1<<pos);
}
int Set(int n,int pos)
{
    n=n | (1<<pos);
    return n;
}
void bitwise_sieve()
{
    int i,j,sqrtMx;
    sqrtMx=sqrt(mx);
    for(int i=3;i<=sqrtMx;i+=2)
    {
        if(check(status[i>>5],i&31)==0)
        {
            for(j=i*i;j<=mx;j+=(i<<1))///j+=(i<<1) => j+=2*i
            {
                status[j>>5]=Set(status[j>>5],j&31);
            }
        }
    }
    prime[0]=2;

    for(int i=3;i<=mx;i+=2)
    {
        if(check(status[i>>5],i&31)==0)
            {
                prime[c]=i;
                c++;
            }
    }

}
void prime_mul()
{
    mul[0]=2;
    for(int i=1;i<5761460;i++){
        mul[i]=(mul[i-1]*prime[i]);
        //cout<<mul[i]<<" ";
    }
}
int main()
{
    bitwise_sieve();
    prime_mul();
   int t;
   scanf("%d",&t);
   for(int te=1;te<=t;te++)
   {
       int n;
       scanf("%d",&n);
       ll ans=1,temp;
       for(int i=0;prime[i]<=sqrt(n);i++)
       {
           temp=n/prime[i];
           while(temp>=prime[i])
           {
               ans*=prime[i];
               temp/=prime[i];
           }
       }
       ll u=upper_bound(prime,prime+c,n)-prime;
       //cout<<u<<endl;
       //cout<<mul[u-1]<<endl;
       ans=(ans*mul[u-1]);
       cout<<"Case "<<te<<": "<<ans<<endl;
   }
}


`,
    resources: [],
    complexity: {},
    comments: "",related_problems:[]
  },
  {
    name: "counts the number of pairs (i, j) for which lcm(i, j) = n and (i ≤ j).",
    id: "count-pair",
    code: `#include<bits/stdc++.h>
#define mx 100000005
using namespace std;
typedef unsigned ll;
ll status[mx/32+2];
//ll mod=4294967296;
 ll prime[5761455+5];
ll mul[5761455+5];///number of prime upto mx is 5761455
ll c=1;
ll bigmod(ll a,ll b)
{
    //uint64_t m=4294967296;
    if(b==0)
        return 1;
    ll x=bigmod(a,b/2);
    x=(x*x);
    if(b%2==1)
        x=(x*a);
    return x;
}
bool check(int n,int pos)
{
    return n & (1<<pos);
}
int Set(int n,int pos)
{
    n=n | (1<<pos);
    return n;
}
void bitwise_sieve()
{
    int i,j,sqrtMx;
    sqrtMx=sqrt(mx);
    for(int i=3;i<=sqrtMx;i+=2)
    {
        if(check(status[i>>5],i&31)==0)
        {
            for(j=i*i;j<=mx;j+=(i<<1))///j+=(i<<1) => j+=2*i
            {
                status[j>>5]=Set(status[j>>5],j&31);
            }
        }
    }
    prime[0]=2;

    for(int i=3;i<=mx;i+=2)
    {
        if(check(status[i>>5],i&31)==0)
            {
                prime[c]=i;
                c++;
            }
    }

}
void prime_mul()
{
    mul[0]=2;
    for(int i=1;i<5761460;i++){
        mul[i]=(mul[i-1]*prime[i]);
        //cout<<mul[i]<<" ";
    }
}
int main()
{
    bitwise_sieve();
    prime_mul();
   int t;
   scanf("%d",&t);
   for(int te=1;te<=t;te++)
   {
       int n;
       scanf("%d",&n);
       ll ans=1,temp;
       for(int i=0;prime[i]<=sqrt(n);i++)
       {
           temp=n/prime[i];
           while(temp>=prime[i])
           {
               ans*=prime[i];
               temp/=prime[i];
           }
       }
       ll u=upper_bound(prime,prime+c,n)-prime;
       //cout<<u<<endl;
       //cout<<mul[u-1]<<endl;
       ans=(ans*mul[u-1]);
       cout<<"Case "<<te<<": "<<ans<<endl;
   }
}



`,
    resources: [],
    complexity: { },
    comments: "",related_problems:[]
  },

  {
    name: "Primality test - Miller Rabin",
    id: "miller-rabin",
    code: `///idone e run koro,taholei hobe
#include<bits/stdc++.h>
#define mx 1000005
using namespace std;
using u64 = uint64_t;
using u128 = __uint128_t;
vector<u64>prime;
void sieve()
{
    bool flag[mx];
    memset(flag,0,sizeof(flag));
    flag[1]=1;
    for(int i=4; i<=mx; i+=2)
    {
        flag[i]=1;
    }
    for(int i=3; i<=sqrt(mx); i+=2)
    {
        if(flag[i]==0)
        {
            for(int j=2*i; j<=mx; j+=i)
                flag[j]=1;
        }
    }
    for(int i=2; i<mx; i++)
    {
        if(flag[i]==0)
        {
            prime.push_back(i);
        }
    }
    //for(int i=0;i<10;++i)
    //cout<<prime[i]<<endl;
}

u64 binpower(u64 base, u64 e, u64 mod) {
    u64 result = 1;
    base %= mod;
    while (e) {
        if (e & 1)
            result = (u128)result * base % mod;
        base = (u128)base * base % mod;
        e >>= 1;
    }
    return result;
}

bool check_composite(u64 n, u64 a, u64 d, int s) {
    u64 x = binpower(a, d, n);
    if (x == 1 || x == n - 1)
        return false;
    for (int r = 1; r < s; r++) {
        x = (u128)x * x % n;
        if (x == n - 1)
            return false;
    }
    return true;
};

bool MillerRabin(u64 n, int iter=5) { // returns true if n is probably prime, else returns false.
    if (n < 4)
        return n == 2 || n == 3;

    int s = 0;
    u64 d = n - 1;
    while ((d & 1) == 0) {
        d >>= 1;
        s++;
    }

    for (int i = 0; i < iter; i++) {
        int a = 2 + rand() % (n - 3);
        if (check_composite(n, a, d, s))
            return false;
    }
    return true;
}
int main()
{
    sieve();
    int t;
    cin>>t;
    u64 n,c;
    for(int i=0; i<t; i++)
    {
        cin>>n;
        u64 ans=1;
        for(int i=0; i<prime.size()&& prime[i]*prime[i]*prime[i]<=n; i++)
        {
            if(n%prime[i]==0)
            {
                c=0;
                while(n%prime[i]==0)
                {
                    n/=prime[i];
                    c++;
                }
                ans*=(c+1);
                //cout<<"in "<<prime[i]<<" "<<c<<" "<<ans<<endl;
            }
        }
        //cout<<ans<<" "<<n<<endl;
        u64 x=sqrt(n);
        if(MillerRabin(n))
            ans*=2;
        else if((x*x==n) && MillerRabin(x))
            ans*=3;
        else if(n!=1)
            ans*=4;
        cout<<ans<<endl;

    }

}`,
    resources: ["https://cp-algorithms.com/algebra/primality_tests.html#:~:text=below%20109.-,Miller%2DRabin%20primality%20test,%E2%8B%85d%2C%20with%20d%20odd.","https://codeforces.com/blog/entry/22317?fbclid=IwAR1ZdjMXEyis6DlaYUiNw1_uxxG7-au-LzJqqx5lkYGLSCFrrOFK4eqURvs","https://www.geeksforgeeks.org/count-divisors-n-on13/"],
    complexity: {  },
    comments: "",related_problems:[]
  },
  {
    name: "Find factorial of a number",
    id: "factorial",
    code:`#include<bits/stdc++.h>
using namespace std;
typedef uint64_t ll;
ll dp[1000000];
ll factorial(ll n)
{
    if(dp[n]!=0)
        return dp[n];
   if(n==1)
        return 1;

   dp[n]=factorial(n-1)*n;
   return dp[n];
}
int main()
{
    int n;
    cin>>n;
    cout<<factorial(n)<<endl;

}
// 2nd Approach
#include<bits/stdc++.h>
#define mx 10000001
using namespace std;
typedef uint64_t ll;
 ll dp[mx];
 ll mod=1000000007;
void solve()
{

    dp[0]=1;
    for(int i=1;i<mx;i++)
    {
        dp[i]=((dp[i-1]%mod)*(i%mod))%mod;
    }
}
int main()
{
    solve();
    ll t;
    cin>>t;
    for(int te=1;te<=t;te++)
    {
     ll n;
     cin>>n;
     ll x=dp[n]%mod;
     cout<<"Case "<<te<<": "<<x<<endl;

    }
}    
    
`,
    resources: [],
    complexity: {},
    comments: "",related_problems:[]
  },
  {
    name: "Calculate the sum LCM(1,n) + LCM(2,n) + .. + LCM(n,n)",
    id: "sum-of-lcm",
    code: `#include<bits/stdc++.h>
#define mx 1000005
using namespace std;
typedef uint64_t ll;
ll phi[mx];
ll res[mx];
void phi_1_to_n( )
{
    for(int i=0;i<mx;i++)phi[i]=i;
    for(int i=2;i<mx;i++)
    {
        if(phi[i]==i)///a prime
        {
            for(int j=i;j<mx;j+=i)
            {
                phi[j]-=phi[j]/i;
            }
        }
    }
}
void precalculate_ans()
{
    for(int i=1;i<=mx;i++)
    {
        for(int j=i;j<=mx;j+=i)
        {
            res[j]+=phi[i]*i;
        }
    }
}
int main()
{
    phi_1_to_n();
    precalculate_ans();
    //for(int i=1;i<=10;i++)
        //cout<<phi[i]<<" "<<res[i]<<endl;
    ll t;
    cin>>t;
    while(t--)
    {
        ll n,ans;
        cin>>n;
        ans=((res[n]+1)*n)/2;
        cout<<ans<<endl;

    }
}`,
    resources: ["https://forthright48.com/spoj-lcmsum-lcm-sum/"],
    complexity: { },
    comments: "",related_problems:[]
  },
  {
    name: "nCr using dp",
    id: "ncr-dp",
    code: `#include<bits/stdc++.h>
using namespace std;
typedef uint64_t ll;
ll dp[201][12];
ll nCr(ll n,ll r)
{
    if(n==r) return 1;
    if(r==1) return n;
    if(r==0) return 1;
    if(dp[n][r])return dp[n][r];
    return dp[n][r]=nCr(n-1,r)+nCr(n-1,r-1);
}
int main()
{
    ll n,r;
    cin>>n>>r;
    cout<<nCr(n,r)<<endl;;

}`,
    resources: ["http://zobayer.blogspot.com/2009/08/calculate-ncr-using-dp.html"],
    complexity: { },
    comments:"",related_problems:[]
  },
  {
    name: "Calculate nCr%mod;n,r<=2*10^5",
    id: "ncr-mod-n",
    code: `///Calculate nCr%mod;n,r<=2*10^5
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

const int MX=2e5+5;
const int mod=1e9+7;

ll big_mod(ll a,ll b,ll mod)
{
    if(b==0)
        return 1%mod;
    ll x=big_mod(a,b/2,mod);
    x=(x*x)%mod;
    if(b%2==1)
        x=(x*a)%mod;
    return x;
}

ll inverse_mod(ll n, ll mod)///modulo inverse
{
    return big_mod(n,mod-2,mod);
}

///Calculates nCr%mod
///pre_calc_fact() function must be called

ll fact[MX];

void pre_calc_fact(ll n, ll mod)///Pre-calculating factorial
{
    fact[0]=1;
    for(ll i=1; i<=n; ++i)
    {
        fact[i]=(fact[i-1]*i)%mod;
    }
}

ll nCr(ll n, ll r, ll mod)
{
    if(r>n)
        return 0;
    return (fact[n]*inverse_mod((fact[r]*fact[n-r])%mod, mod))%mod;///because nCr=n!/(r!*(n-r)!)
}
int main()
{
    pre_calc_fact(MX-1, mod);
    ll t;
    cin>>t;
    while(t--)
    {
       ll n,r;
       cin>>n>>r;
       cout<<nCr(n,r,mod)<<endl;
    }
}



`,
    resources: [],
    complexity: { },
    comments: "",related_problems:[]
  },
  {
    name: "Goldbach's conjecture",
    id: "goldbach-conjecture",
    code: `///For any integer n (n ≥ 4) there exist two prime numbers p1 and p2 such that p1 + p2 = n
#include<bits/stdc++.h>
#define mx 1000000
using namespace std;
typedef long long ll;
vector<ll>prime;
bool flag[mx];
 void sieve()
 {

     memset(flag,0,sizeof(flag));
     flag[1]=1;
     for(int i=4;i<mx;i+=2)
    {
        flag[i]=1;
    }
     for(int i=3;i<=sqrt(mx);i+=2)
     {
         if(flag[i]==0)
         {
             for(int j=2*i;j<mx;j+=i)
                flag[j]=1;
         }
     }
     for(int i=2;i<mx;i++)
     {
         if(flag[i]==0)
         {
             prime.push_back(i);
         }
     }
     //for(int i=0;i<10;++i)
        //cout<<prime[i]<<endl;
 }
void goldbachs_conjecture(ll n)
{

    ll x,y;
    bool f=0;
    for(ll i=2; i<=n/2; i++)
    {
        if(flag[i]==0 && flag[n-i]==0)
        {
            x=i;
            y=n-i;
            f=1;
            break;
        }
    }
    if(f==1)
    {
        printf("%lli = %lli + %lli\n",n,x,y);
    }
    else
        printf("Impossible.\n");
}
 int main()
 {
     sieve();
     ll n;
     cin>>n;
     goldbachs_conjecture(n);
 }
`,
    resources: [],
    complexity: {},
    comments: "",related_problems:[]
  },
  {
    name: "Number of divisors in each 1 to n",
    id: "number-divisors-1-to-n",
    code: `#include<bits/stdc++.h>
#define fastio ios::sync_with_stdio(0); cin.tie(0); cout.tie(0)
#define mx 1000002
using namespace std;
typedef long long ll;


ll mp[1000005];

int main()
{

    ll cnt=0;
    for(ll i=2; i<=1000000; i++)
    {
        for(ll j=2*i; j<=1000000; j+=i)
        {
            // cnt++;
            mp[j]++;
        }

    }

    for(int i=1; i<=100; i++)
    {
        cout<<"i--- "<<i<<" "<<mp[i]+1<<endl;
    }
}`,
    resources: [],
    complexity: {},
    comments: ""
  }
];

export default function NumberTheory() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);

  return (
    <div className="flex h-screen bg-gradient-to-br from-lavender to-sky-200 text-gray-900">
      {/* <div className="min-h-screen bg-gradient-to-br from-lavender to-sky-200 text-gray-900"> */}
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg rounded-r-3xl p-5 overflow-y-auto">
        <h2 className="font-montserrat font-bold text-lg text-blue-900">Subtopics</h2>
        <ul className="space-y-3 mt-4">
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full text-left font-roboto text-blue-800 hover:text-cyan-600 transition duration-300 ${
                  activeTopic === topic.id ? "font-bold text-cyan-700" : ""
                }`}
              >
                {topic.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-montserrat font-extrabold text-blue-900">
          Number Theory
        </h1>
        <p className="text-gray-800 mt-4 font-roboto text-lg">
          Welcome to the Number Theory section! Explore concepts, codes, and problems.
        </p>

        {topics.map(
          (topic) =>
            activeTopic === topic.id && (
              <section key={topic.id} className="mt-12 bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-montserrat font-semibold text-blue-900">
                  {topic.name}
                </h2>

                {/* Code Section */}
                {topic.code && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-blue-800">Code</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto shadow-inner">
                      <code className="whitespace-pre text-sm">{topic.code}</code>
                    </pre>
                  </div>
                )}

                {/* Resources Section */}
                {topic.resources.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-blue-800">Resources</h3>
                    <ul className="list-disc ml-6 text-cyan-700">
                      {topic.resources.map((resource, index) => (
                        <li key={index}>
                          <a
                            href={resource}
                            className="hover:text-cyan-500 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resource}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Problems Section */}
                {topic.related_problems.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-blue-800">Related Problems</h3>
                    <ul className="list-disc ml-6 text-cyan-700">
                      {topic.related_problems.map((problem, index) => (
                        <li key={index}>
                          <a
                            href={problem}
                            className="hover:text-cyan-500 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {problem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Comments Section */}
                {topic.comments && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-blue-800">Comments</h3>
                    <textarea
                      className="w-full h-32 border-2 border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-400"
                      placeholder="Add your comments here..."
                      defaultValue={topic.comments}
                    />
                  </div>
                )}
              </section>
            )
        )}
      </div>
    </div>
  );

}
