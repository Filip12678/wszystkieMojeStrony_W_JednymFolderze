print("To jest program obliczający BMI")
print("")
a = float(input("Podaj swoją wagę w kilogramach: "))
b = float(input("Podaj swój wzrost w metrach: "))
print("")
c = a / (b*b)
print("Twoje BMI: %f" % (c))

if c >= 18.5 and c <= 24.9:
    print("Twoja waga jest prawidłowa")


if c > 24.9:
    print("Ważysz za dużo, schudnij")


if c < 18.5:
    print("Ważysz za mało, przytyj")
