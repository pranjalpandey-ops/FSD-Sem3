#include <bits/stdc++.h>
using namespace std;
class sumnum{
    private:
    int a,b;
    public:
    void inputdata(){
        cout<<"Enter First Number";
        cin>>a;
        cout<<"Enter second Number";
        cin>>b;
        
     }
     void outputdata(){
        cout<<"Sum of Both number";
        cout<<a<<"+"<<b<<"="<<a+b<<endl;

     }
    
};
 
int main() {
    sumnum s ;
    s.inputdata();
    s.outputdata();

}
