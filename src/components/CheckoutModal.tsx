import React, { useState } from 'react';
import { CartItem, formatPrice } from '../App';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  onOrderComplete: () => void;
}

export function CheckoutModal({ 
  isOpen, 
  onClose, 
  items, 
  totalPrice, 
  onOrderComplete 
}: CheckoutModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    country: 'Nigeria'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    toast.success('Order placed successfully!');
    onOrderComplete();
  };

  const vatAmount = totalPrice * 0.075; // 7.5% VAT in Nigeria
  const finalTotal = totalPrice + vatAmount;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[95vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="flex items-center gap-2 text-green-800">
              <Lock className="h-5 w-5 text-green-600" />
              Secure Checkout
            </DialogTitle>
            <DialogDescription>
              Complete your purchase securely with our encrypted checkout process. Fill in your details below to proceed.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto">
            <div className="grid lg:grid-cols-2 gap-6 p-6">
              {/* Order Summary */}
              <div className="order-2 lg:order-1">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-2">
                          <div className="flex-1">
                            <p className="text-sm line-clamp-1 text-green-800">{item.title}</p>
                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <span className="text-green-700">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VAT (7.5%):</span>
                        <span>{formatPrice(vatAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg">
                        <span>Total:</span>
                        <span className="text-green-700">{formatPrice(finalTotal)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Payment Form */}
              <div className="order-1 lg:order-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact Information */}
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-green-800">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label htmlFor="email" className="text-sm">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="student@university.edu.ng"
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="firstName" className="text-sm">First Name</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Payment Method */}
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base text-green-800">
                        <CreditCard className="h-4 w-4" />
                        Payment Method
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Tabs defaultValue="card" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="card" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Credit Card</TabsTrigger>
                          <TabsTrigger value="bank" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Bank Transfer</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="card" className="space-y-3 mt-3">
                          <div>
                            <Label htmlFor="cardNumber" className="text-sm">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              required
                              value={formData.cardNumber}
                              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label htmlFor="expiryDate" className="text-sm">Expiry Date</Label>
                              <Input
                                id="expiryDate"
                                placeholder="MM/YY"
                                required
                                value={formData.expiryDate}
                                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv" className="text-sm">CVV</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                required
                                value={formData.cvv}
                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="bank" className="mt-3">
                          <div className="text-center py-6">
                            <p className="text-muted-foreground text-sm mb-3">
                              You will be redirected to your bank to complete the payment via online banking.
                            </p>
                            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                              <p className="text-xs text-green-800">
                                Bank transfer checkout will open after clicking "Complete Order"
                              </p>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                  
                  {/* Billing Address */}
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-green-800">Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label htmlFor="billingAddress" className="text-sm">Address</Label>
                        <Input
                          id="billingAddress"
                          required
                          value={formData.billingAddress}
                          onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="city" className="text-sm">City</Label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state" className="text-sm">State</Label>
                          <Input
                            id="state"
                            required
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            className="mt-1"
                            placeholder="Lagos, Abuja, etc."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </form>
              </div>
            </div>
          </div>
          
          {/* Footer with security notice and buttons */}
          <div className="border-t bg-gray-50 px-6 py-4 space-y-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-800">
                  Your payment information is secure and encrypted
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isProcessing}
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={handleSubmit}
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Complete Order - {formatPrice(finalTotal)}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}