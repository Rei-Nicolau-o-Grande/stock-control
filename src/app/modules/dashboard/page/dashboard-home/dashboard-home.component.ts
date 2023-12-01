import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProducts';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductsDataTransferService } from 'src/app/shared/services/products/products-data-transfer.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: []
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  public productsList: Array<GetAllProductsResponse> = [];

  private destroy$ = new Subject<void>();

  constructor(
    private productsService: ProductsService,
    private messageService: MessageService,
    private productsDtService: ProductsDataTransferService
    ) {}

  ngOnInit(): void {
    this.getproductsDatas();
  }

  getproductsDatas(): void {
    this.productsService.getAllProducts().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.productsList = response;
          this.productsDtService.setProductsDatas(this.productsList);
        }
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao buscar produtos.',
          life: 2500
        })
      },
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
