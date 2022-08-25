include <iostream>
using namespace std;

int main()
 {
  int n;

  cout << "Enter an integer: ";
  cin >> n;

  if ( n % 2 == 0)
    cout << n << " is even.";
  else
    cout << n << " is odd.";

  return 0;
}
public static int[] getEvens(int a[]) 
{
    int myEvens = 0;

    for (int i = 0; i < a.length; i++)
     {
      if (a[i] % 2 == 0) {
         myEvens++;
      }    
    }


    int[] evenArray = new int[myEvens];
    int evenIndex = 0;
    for (int i = 0; i < a.length; i++)
     {
      if (a[i] % 2 == 0) {
        evenArray[evenIndex] = a[i];
        evenIndex++;
      }    
    }
    Arrays.sort(evenArray);

    return evenArray;
}