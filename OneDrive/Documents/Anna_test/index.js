
public class JavaApplication1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
      int array[] = {16, 5, 13, 54, 17, 2, 38, 42, 67};

      for (int nombre:array)
         System.out.print(nombre+" ");

      int somme = 0;
      for(int i = 0; i < array.length; i++){
         somme = somme + array[i];
      }
      float moyenne = (float) somme / array.length;

      System.out.print("\nMoyenne = "+moyenne);
    }

}