export class PurchaseOrderEntity{

    public poHeaderId: number;
    public orderNumber: string;
    public creationDate: Date;
    public buyerId: number;
    public approvedDate: Date;
    public totalAmount: number;
    public status: string;

}