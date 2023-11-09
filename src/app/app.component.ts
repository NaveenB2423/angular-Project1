import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route: any;
    product: any;
  constructor(private http: HttpClient) {
   
  }
  products2: any[] = [];
  products: any[] = [];
  title = 'AngularProject1';
  Testng: { productId: string, branchId: string } = { productId: '', branchId: '' };

  posttest() {
    console.log(this.Testng.productId);
    console.log(this.Testng.branchId);
    const apiUrl = "http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId";
    const requestBody =
    {
      "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
      "language_code": "en",
      "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
      "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
      "device_type": "android",
      "mst_product_id": 41199,
      "branch_id": 4,
      "price_type": 1,
      "dishtype_id": "0",
      "is_for_repeat_set_combo": 0
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(apiUrl, requestBody).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response && response.data && response.data.details ) {
          this.products = response.data.details;
          alert("Successfully Fetched");
        } else {
          alert("Fetching Error");
        }
      },
    );
  }

  selectedProducts: string[] = [];
  toggleSelectedProduct(productName: string) {
    console.log(this.selectedProducts);
    
    const index = this.selectedProducts.indexOf(productName);
    if (index === -1) {
      this.selectedProducts.push(productName);
    } else {
      this.selectedProducts.splice(index, 1);
    }
  }

}
