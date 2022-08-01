const string textoOlaMundo = "Olá mundo, esse é meu primeiro programa c#, feito por ";
string nomeCompleto;
int idade;


Console.WriteLine("Qual seu nome completo?");
nomeCompleto = Console.ReadLine().ToString();
Console.WriteLine("Qual sua idade?");
idade = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(textoOlaMundo + nomeCompleto + " que tem " + idade + " anos");