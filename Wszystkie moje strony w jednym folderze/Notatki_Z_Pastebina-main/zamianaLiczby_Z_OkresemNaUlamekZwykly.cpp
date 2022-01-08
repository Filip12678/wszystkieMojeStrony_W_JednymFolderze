#include <iostream>
#include <cstring>
#include <sstream>
#include <cmath>
#include <string>
#include <cstdlib>
#include <cstdio>


using namespace std;

char *tr(char *str)
  {
   static char buff[256];
   char cp[]="\245\206\251\210\344\242\230\276\253\244\217\250\235\343\340\227\275\215¹æê³ñóœ¿Ÿ¥ÆÊ£ÑÓŒ¯";
   if(strlen(str)>=sizeof(buff)) return str;
   char *bf=buff;
   while(*str)
     {
      char *pos=strchr(cp+18,*str);
      *(bf++)=pos?*(pos-18):*str;
      ++str;
     }
   *bf=0;
   return buff;
  }






string zamianaLiczby_Z_OkresemNaUlamekZwykly(float liczbaBezOkresu1, float okresLiczby1)
{
    string sprawdzenie, kropka, liczbaBezOkresu, okresLiczby, liczbaDoKonwersji1, ulamekZwykly, liczbaDoKonwersji2, liczbaX1;
    float dlugoscOkresu, liczbaX, liczbaDoKonwersji, liczbaPoKonwersji;
    stringstream ss, ss1, ss2, ss3;
    ss << liczbaBezOkresu1;
    ss >> liczbaBezOkresu;
    kropka = ".";

    if (liczbaBezOkresu.find(kropka) != string::npos)
    {
        //liczbaBezOkresu = liczbaBezOkresu + kropka;
        cout<< "";
    }

    else
    {
        liczbaBezOkresu = liczbaBezOkresu + kropka;
    }

    ss1 << okresLiczby1;
    ss1 >> okresLiczby;
    dlugoscOkresu = okresLiczby.length();

    liczbaX = pow(10, dlugoscOkresu);

    liczbaDoKonwersji1 = liczbaBezOkresu + okresLiczby + okresLiczby + okresLiczby + okresLiczby + okresLiczby + okresLiczby + okresLiczby + okresLiczby + okresLiczby + okresLiczby;
    liczbaDoKonwersji = stof(liczbaDoKonwersji1);
    liczbaPoKonwersji = liczbaDoKonwersji;
    liczbaDoKonwersji = liczbaDoKonwersji * liczbaX;

    liczbaDoKonwersji = liczbaPoKonwersji - liczbaDoKonwersji;
    liczbaDoKonwersji = abs(liczbaDoKonwersji);
    liczbaX = liczbaX - 1;


    ss2 << liczbaDoKonwersji;
    ss2 >> liczbaDoKonwersji2;
    ss3 << liczbaX;
    ss3 >> liczbaX1;

    ulamekZwykly = liczbaDoKonwersji2 + "/" + liczbaX1;
    return ulamekZwykly;
}


int main()
{
    float liczbaBezOkresu, okresLiczby;
    string ulamekZwykly;
    cout << tr("WprowadŸ liczbê bez okresu: ");
    cin >> liczbaBezOkresu;
    cout << tr("WprowadŸ okres liczby: ");
    cin >> okresLiczby;
    ulamekZwykly = zamianaLiczby_Z_OkresemNaUlamekZwykly(liczbaBezOkresu, okresLiczby);
    cout << tr("\nLiczba przekonwertowana na u³amek zwyk³y: ") << ulamekZwykly;
    getchar();getchar();
    return 0;
}
