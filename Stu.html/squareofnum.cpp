#include <bits/stdc++.h>
using namespace std;
class sqnum{
    int a ,&b;
    public:
    void input(){
        cout<<"Enter First Number";
        cin>>a;
    }
        
    void square(int a , int &b){
        b=a*a;
    }
    void output(){
        cout<<"B is"<<b<<endl;
    }
};
int main(){
    sqnum s;
    s.input();
    s.square();
    s.output();
    



}
    


        
        