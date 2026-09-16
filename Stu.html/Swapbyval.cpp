#include <bits/stdc++.h>
using namespace std;
class swapbyvalue{
    private:
    int a,b,temp;
    public:
    void swap(int a , int b){
        // cout<<"Enter First Number";
        // cin>>a;
        // cout<<"Enter second Number";
        // cin>>b;
        a=temp;
        b=a;
        temp=b;
        
    }
    void output(){
        cout<<"A is"<<a<<endl;
        cout<<"B is"<<b<<endl;
    }
};
class swapbyref{
    private:
    int a,b,;
    public:
    void input(int first, int sec){
        a=first;
        b=sec;
    }
    void swap(){
        int temp=a;
        a=b;
        b=temp;
    }
    void output(){
        cout<<"A is"<<a<<endl;
        cout<<"B is"<<b<<endl;
    }
};
int main(){
    int a,b;
    // swapbyvalue s;
    // cout<<"Enter First Number  A"<<endl;
    // cin>>a;
    // cout<<"Enter second Number"<<endl;
    // cin>>b;
    // s.swap(a,b);
    swapbyref s;
    int a=4;
    int b=5;
    s.input(a,b);
    s.swap();
    s.output();
}
