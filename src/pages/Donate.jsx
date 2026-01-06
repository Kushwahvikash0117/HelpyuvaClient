import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShieldCheck, Package, ArrowLeft, User, Mail, CheckCircle, Info, Truck, MapPin, AlertTriangle } from 'lucide-react';

const Donate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [donorDetails, setDonorDetails] = useState({ 
    name: '', email: '', pan: '', address: '', state: '', description: '', itemCount: '' 
  });

  const categories = ["Clothes", "Stationery", "Footwear", "Blankets", "Toys", "Others"];
  
  const indianStates = [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const validateDonationLogic = () => {
    const totalItems = parseInt(donorDetails.itemCount) || 0;
    const hasClothes = selectedCategories.includes("Clothes");
    const hasOthers = selectedCategories.length > (hasClothes ? 1 : 0);

    if (selectedCategories.length === 0) return "Please select at least one category.";
    if (!donorDetails.itemCount || totalItems <= 0) return "Please enter the number of pieces.";
    if (!donorDetails.description) return "Please describe the items.";
    
    if (hasClothes && !hasOthers && totalItems < 10) {
      return "For clothing-only donations, a minimum of 10 pieces is required.";
    }
    if (hasClothes && hasOthers && totalItems < 10) {
      return "Mixed donations must have at least 10 items total (e.g., 5 clothes and 5 others).";
    }
    if (!hasClothes && totalItems < 5) {
      return "Minimum 5 items required for non-clothing donations.";
    }
    return null;
  };

  const handleNext = () => {
    if (step === 1) {
      const error = validateDonationLogic();
      if (error) { alert(error); return; }
    }
    if (step === 2 && (!donorDetails.name || !donorDetails.email || !donorDetails.address || !donorDetails.state)) {
      alert("Name, Email, Address, and State are mandatory.");
      return;
    }
    setStep(step + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#f8fafb] min-h-screen font-['Inter',_sans-serif]">
      {/* Top Banner */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 text-left">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-2 text-[#2f5d62]">
            <ShieldCheck size={12} /> Verified Physical Donation
          </div>
          <div>Ticket ID: #HY-DON-{Math.floor(Math.random() * 900000 + 100000)}</div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto py-12 px-4">
        {step < 3 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <button onClick={() => step === 2 ? setStep(1) : navigate('/join-us')} className="flex items-center gap-2 text-[#436d6d] font-bold text-sm mb-6 transition-all hover:translate-x-[-4px]">
                <ArrowLeft size={18} /> {step === 2 ? "Modify Donation Items" : "Back to Home"}
              </button>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex bg-gray-50/50 border-b border-gray-100">
                  <div className={`flex-1 py-4 text-center text-[10px] font-black uppercase tracking-widest ${step === 1 ? 'text-[#2f5d62] bg-white border-b-2 border-[#2f5d62]' : 'text-gray-400'}`}>01. Item Selection</div>
                  <div className={`flex-1 py-4 text-center text-[10px] font-black uppercase tracking-widest ${step === 2 ? 'text-[#2f5d62] bg-white border-b-2 border-[#2f5d62]' : 'text-gray-400'}`}>02. Pickup Details</div>
                  <div className="flex-1 py-4 text-center text-[10px] font-black uppercase tracking-widest text-gray-300">03. Success</div>
                </div>

                <div className="p-8 md:p-12">
                  {step === 1 ? (
                    <div className="animate-in fade-in duration-300 text-left">
                      <h2 className="text-2xl font-black text-[#2f5d62] mb-6">What are you donating today?</h2>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                        {categories.map((cat) => (
                          <button key={cat} onClick={() => toggleCategory(cat)} className={`py-4 px-2 rounded-xl border-2 font-bold text-sm transition-all flex flex-col items-center gap-2 ${selectedCategories.includes(cat) ? 'bg-[#2f5d62] border-[#2f5d62] text-white shadow-lg' : 'border-gray-50 text-gray-500 hover:border-[#2f5d62]'}`}>
                            <Package size={20} className={selectedCategories.includes(cat) ? 'text-white' : 'text-gray-300'} /> {cat}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 mb-2 block tracking-wider">Total Count of Items</label>
                          <input name="itemCount" type="number" value={donorDetails.itemCount} onChange={handleInputChange} className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-[#2f5d62] font-bold text-[#2f5d62]" placeholder="e.g. 15" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 mb-2 block tracking-wider">Describe the items</label>
                          <textarea name="description" value={donorDetails.description} onChange={handleInputChange} className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl outline-none focus:border-[#2f5d62] min-h-[100px]" placeholder="Please list types of items (e.g., 6 shirts, 4 books, 2 toys)..." />
                        </div>
                      </div>
                      
                      <button onClick={handleNext} className="w-full bg-[#2f5d62] text-white py-5 mt-8 rounded-2xl font-bold shadow-xl shadow-[#2f5d62]/20 hover:bg-[#1f3e41] transition-all">Proceed to Address</button>
                    </div>
                  ) : (
                    <div className="animate-in fade-in duration-300 space-y-4 text-left">
                      <h2 className="text-2xl font-black text-[#2f5d62] mb-6">Where should we pick up?</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="name" value={donorDetails.name} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-1 ring-[#2f5d62]" placeholder="Full Name *" />
                        <input name="email" type="email" value={donorDetails.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-1 ring-[#2f5d62]" placeholder="Email Address *" />
                      </div>
                      <input name="address" value={donorDetails.address} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-1 ring-[#2f5d62]" placeholder="Complete Street Address (House/Flat No, Area) *" />
                      <select name="state" value={donorDetails.state} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none text-gray-500 font-medium">
                        <option value="">Select Your State *</option>
                        {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                      </select>
                      <button onClick={handleNext} className="w-full bg-gradient-to-br from-[#436d6d] to-[#2f5d62] text-white py-5 rounded-2xl font-black text-lg shadow-xl mt-4 hover:opacity-90 transition-all">Schedule My Pickup</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6 text-left">
              <div className="bg-[#2f5d62] text-white p-8 rounded-[32px] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <AlertTriangle size={80} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-6 border-b border-white/10 pb-4">Mandatory Guidelines</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-amber-400 text-xs font-black uppercase mb-2 flex items-center gap-2"><CheckCircle size={14}/> Quality Standard</h4>
                    <p className="text-sm opacity-90 leading-relaxed">All items must be <b>washed</b>, <b>stainless</b>, and in <b>re-usable condition</b>.</p>
                  </div>
                  <div>
                    <h4 className="text-amber-400 text-xs font-black uppercase mb-2 flex items-center gap-2"><Package size={14}/> Minimum Quantity</h4>
                    <ul className="text-sm opacity-90 space-y-2">
                      <li className="flex gap-2"><span>•</span> <span><b>Clothes Only:</b> Min. 10 pieces</span></li>
                      <li className="flex gap-2"><span>•</span> <span><b>Mixed:</b> Min. 10 total</span></li>
                      <li className="flex gap-2"><span>•</span> <span><b>Non-Clothes:</b> Min. 5 items</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto py-10 animate-in zoom-in duration-500">
            <div className="bg-white rounded-[40px] p-10 md:p-16 border border-gray-100 shadow-2xl text-center">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={50} strokeWidth={3} />
              </div>
              <h1 className="text-3xl font-black text-[#2f5d62] mb-4">Pickup Registered!</h1>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto text-sm">
                Thank you, <span className="font-bold text-[#2f5d62]">{donorDetails.name}</span>. Request confirmed.
              </p>
              
              <button onClick={() => navigate('/join-us')} className="bg-[#2f5d62] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#1f3e41] transition-all">Back to Foundation Page</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
