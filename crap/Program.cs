
namespace Test{
    class TestClass{
static void Main(string[] args)
{

int odd=0,even=0;
int[] arr=new int[8];
for(int i=0;i<8;i++){
    arr[i]=Convert.ToInt16(Console.ReadLine());
    if(arr[i]%2==0){
        even+=arr[i];
    }
    else{

        odd+=arr[i];
    }
  }
  Console.WriteLine("Sum of Odd Number is: {0} \n Sum of Even Number is: {1}",odd,even);
}
}
}