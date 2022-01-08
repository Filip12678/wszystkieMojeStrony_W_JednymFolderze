#include <iostream>
#include <iomanip>
#include <ctime>

using namespace std;


float konwersjaDatyGregorianskiejNaJulianska(float rok, float miesiac, float dzien, float godzina, float minuta, float sekunda)
{
    float x = (miesiac + 9) / 12;
    float a = 4716 + rok + int(x);
    float y = 275 * miesiac / 9;
    float v = 7 * a / 4;
    float b = 1729279.5 + 367 * rok + int(y) - int(v) + dzien;
    float q = (a + 83) / 100;
    float c = int(q);
    float w = 3 * (c + 1) / 4;
    float e = int(w);
    float dataJulianska = b + 38 - e;
    return dataJulianska;
}


int main()
{
    cout<<setprecision(10000);

    time_t now;
    struct tm nowLocal;
    now=time(NULL);
    nowLocal=*localtime(&now);

    int wybor;
    cout<< "Co chcesz zrobi\206";
    cout << "\n1. Zamieni\206 aktualn\245 dat\251 na dat\251 Julia\344sk\245 \n";
    cout << "2. Zamieni\206 wybran\245 dat\251 na dat\251 Julia\344sk\245 \n";
    cout << "Wyb\242r: ";
    cin>> wybor;

    if (wybor == 1)
    {
        int rok = nowLocal.tm_year + 1900;
        int miesiac = nowLocal.tm_mon + 1;
        int dzien = nowLocal.tm_mday;
        int godzina = nowLocal.tm_hour;
        int minuta = nowLocal.tm_min;
        int sekunda = nowLocal.tm_sec;

        float wynik = konwersjaDatyGregorianskiejNaJulianska(rok, miesiac, dzien, godzina, minuta, sekunda);
        cout<< "\nData: " << dzien << "." << miesiac << "." << rok << " " << godzina << ":" << minuta << ":" << sekunda << " przekonwertowana na dat\251 Julia\344sk\245: " << wynik;
        getchar(); getchar();
    }

    if (wybor == 2)
    {
        int rok;
        cout<< "\nWprowad\253 rok: ";
        cin>> rok;

        int miesiac;
        cout<< "Wprowad\253 miesi\245c: ";
        cin>> miesiac;

        int dzien;
        cout<< "Wprowad\253 dzie\344: ";
        cin>> dzien;

        int godzina;
        cout<< "Wprowad\253 godzin\251: ";
        cin>> godzina;

        int minuta;
        cout<< "Wprowad\253 minut\251: ";
        cin>> minuta;

        int sekunda;
        cout<< "Wprowad\253 sekund\251: ";
        cin>> sekunda;

        float wynik = konwersjaDatyGregorianskiejNaJulianska(rok, miesiac, dzien, godzina, minuta, sekunda);
        cout<< "\nData: " << dzien << "." << miesiac << "." << rok << " " << godzina << ":" << minuta << ":" << sekunda << " przekonwertowana na dat\251 Julia\344sk\245: " << wynik;
        getchar(); getchar();
    }
    return 0;
}
