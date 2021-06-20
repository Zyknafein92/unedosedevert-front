
import {Variant} from './variant.model';
import {Produit} from './produit.model';

export class PanierLigne {
  id: number;
  variant: Variant;
  produit: Produit;
  quantity: number;
  prix: number;

  manualId: number;
}
