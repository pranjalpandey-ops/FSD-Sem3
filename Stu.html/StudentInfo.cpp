#include<iostream>
using namespace std;
class student{
    private:
    string Name;
    int Rollno;
    float percent;
    public:
    void input(string n , int r , float p){
        // cout<<"enter Name";
        // cin>>n;
        // cout<<"eneter Rollno";
        // cin>>r;
        // cout<<"Enter Percent Marks";
        // cin>>p;
        Name=n;
        Rollno = r;
        percent=p;

    }
    void name(){
        cout<<"Students Name"<<Name;
    }
    void rollno(){
        cout<<"Roll no"<<Rollno;

    }
    void Percent(){
        cout<<"Percent"<<percent;
    }
    void info(){
        name();
        rollno();
        Percent();
    }
};
int main(){
    student s;
    s.input("NK",123,90);
    s.name();
    s.rollno();
    s.info();
}