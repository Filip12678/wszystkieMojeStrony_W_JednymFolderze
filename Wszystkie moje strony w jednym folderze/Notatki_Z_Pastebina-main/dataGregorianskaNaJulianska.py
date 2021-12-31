from datetime import datetime

now = datetime.now()


def konwersjaDatyJulianskiejNaGregorianska(rok, miesiac, dzien, godzina, minuta, sekunda):
    x = (miesiac + 9) / 12
    a = 4716 + rok + int(x)
    y = 275 * miesiac / 9
    v = 7 * a / 4
    b = 1729279.5 + 367 * rok + int(y) - int(v) + dzien
    q = (a + 83) / 100
    c = int(q)
    w = 3 * (c + 1) / 4
    e = int(w)
    wynik = b + 38 - e
    return wynik







print("1. Przekonwertować aktualną datę na datę kalendarza Juliańskiego")
print("2. Przekownertować wybraną przez ciebie datę na datę kalendarza Juliańskiego")
print("")
wybor = int(input("Wybierz co chcesz zrobić: "))
print("")

if wybor == 1:
    rok = now.strftime("%Y")
    miesiac = now.strftime("%m")
    dzien = now.strftime("%d")
    godzina = now.strftime("%H")
    minuta = now.strftime("%M")
    sekunda = now.strftime("%S")

    rok = int(rok)
    miesiac = int(miesiac)
    dzien = int(dzien)
    godzina = int(godzina)
    minuta = int(minuta)
    sekunda = int(sekunda)

    wynik = konwersjaDatyJulianskiejNaGregorianska(rok, miesiac, dzien, godzina, minuta, sekunda)
    print("")
    print("Aktualny czas w dacie Juliańskiej:", wynik)

    print("")
    print("Aktualna data: %d.%d.%d %d:%d:%d" % (dzien, miesiac, rok, godzina, minuta, sekunda))

    

if wybor == 2:
    rok = int(input("Wprowadź rok: "))
    miesiac = int(input("Wprowadź miesiąc: "))
    dzien = int(input("Wprowadź dzień: "))
    godzina = int(input("Wprowadź godzinę: "))
    minuta = int(input("Wprowadź minutę: "))
    sekunda = int(input("Wprowadź sekundę: "))

    wynik = konwersjaDatyJulianskiejNaGregorianska(rok, miesiac, dzien, godzina, minuta, sekunda)
    print("")
    print("Wprowadzony czas w dacie Juliańskiej:", wynik)
