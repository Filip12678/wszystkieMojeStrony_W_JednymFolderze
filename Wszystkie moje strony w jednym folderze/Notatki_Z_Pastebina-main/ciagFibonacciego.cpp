#include <iostream>
#include <iomanip>
#include <cstdio>

using namespace std;

long double fib[100000];
int n;

int main()
{
    cout << "Ile liczb mam z ci\245gu Fibonacciego mam wyznaczy\206: ";
    cin>>n;

    fib[0] = 1;
    fib[1] = 1;

    for (int i=2; i<n; i++)
    {
        //cout <<endl<< "i wynosi: " << i;
        fib[i] = fib[i-1] + fib[i-2];
    }
cout<<setprecision(10000);


    for(int i=0; i<n; i++)
    {
        //cout<<endl<<"Liczba nr " <<i+1<<": "<<fib[i];
    }

    //cout<<endl<<"Liczba nr " <<n<<" z ci\245gu Fibonacciego wynosi: "<<fib[n-1];
    cout<<"Z\210ota liczba wynosi: "<<fib[n-1]/fib[n-2];
    cout<<"\n";
    cout<<223/71;
    //Maksymalna liczba jaka komputer jest w stanie wyliczyc wynosi: 23601
    getchar();getchar();
    return 0;
}
