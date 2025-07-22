class DrugDatabase {
    constructor() {
        this.drugs = [
            // Aminoglycosides (All major ones)
            { name: "Gentamicin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },
            { name: "Tobramycin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },
            { name: "Amikacin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },
            { name: "Streptomycin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },
            { name: "Neomycin", halfLife: 3, unit: "hours", category: "Aminoglycoside", tdm: false, renalAdjust: true },
            { name: "Kanamycin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },
            { name: "Netilmicin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },
            { name: "Sisomicin", halfLife: 2.5, unit: "hours", category: "Aminoglycoside", tdm: true, renalAdjust: true },

            // Beta-lactams with Renal Adjustment
            { name: "Amoxicillin", halfLife: 1.3, unit: "hours", category: "Penicillin", tdm: false, renalAdjust: true },
            { name: "Ampicillin", halfLife: 1.5, unit: "hours", category: "Penicillin", tdm: false, renalAdjust: true },
            { name: "Penicillin G", halfLife: 0.5, unit: "hours", category: "Penicillin", tdm: false, renalAdjust: true },
            { name: "Piperacillin", halfLife: 1, unit: "hours", category: "Penicillin", tdm: false, renalAdjust: true },
            { name: "Piperacillin/Tazobactam", halfLife: 1, unit: "hours", category: "Penicillin + β-lactamase inhibitor", tdm: false, renalAdjust: true },
            { name: "Ticarcillin/Clavulanate", halfLife: 1.2, unit: "hours", category: "Penicillin + β-lactamase inhibitor", tdm: false, renalAdjust: true },
            { name: "Ampicillin/Sulbactam", halfLife: 1.5, unit: "hours", category: "Penicillin + β-lactamase inhibitor", tdm: false, renalAdjust: true },
            { name: "Amoxicillin/Clavulanate", halfLife: 1.3, unit: "hours", category: "Penicillin + β-lactamase inhibitor", tdm: false, renalAdjust: true },

            // Cephalosporins with Renal Adjustment
            { name: "Cephalexin", halfLife: 1, unit: "hours", category: "Cephalosporin (1st gen)", tdm: false, renalAdjust: true },
            { name: "Cefazolin", halfLife: 2, unit: "hours", category: "Cephalosporin (1st gen)", tdm: false, renalAdjust: true },
            { name: "Cefuroxime", halfLife: 1.5, unit: "hours", category: "Cephalosporin (2nd gen)", tdm: false, renalAdjust: true },
            { name: "Cefoxitin", halfLife: 1, unit: "hours", category: "Cephalosporin (2nd gen)", tdm: false, renalAdjust: true },
            { name: "Ceftriaxone", halfLife: 8, unit: "hours", category: "Cephalosporin (3rd gen)", tdm: false, renalAdjust: false },
            { name: "Ceftazidime", halfLife: 2, unit: "hours", category: "Cephalosporin (3rd gen)", tdm: false, renalAdjust: true },
            { name: "Cefotaxime", halfLife: 1.5, unit: "hours", category: "Cephalosporin (3rd gen)", tdm: false, renalAdjust: true },
            { name: "Cefepime", halfLife: 2, unit: "hours", category: "Cephalosporin (4th gen)", tdm: false, renalAdjust: true },
            { name: "Ceftaroline", halfLife: 2.5, unit: "hours", category: "Cephalosporin (5th gen)", tdm: false, renalAdjust: true },

            // Carbapenems with Renal Adjustment
            { name: "Imipenem", halfLife: 1, unit: "hours", category: "Carbapenem", tdm: false, renalAdjust: true },
            { name: "Meropenem", halfLife: 1, unit: "hours", category: "Carbapenem", tdm: false, renalAdjust: true },
            { name: "Ertapenem", halfLife: 4, unit: "hours", category: "Carbapenem", tdm: false, renalAdjust: true },
            { name: "Doripenem", halfLife: 1, unit: "hours", category: "Carbapenem", tdm: false, renalAdjust: true },

            // Other Antibiotics with Renal Adjustment
            { name: "Vancomycin", halfLife: 6, unit: "hours", category: "Glycopeptide", tdm: true, renalAdjust: true },
            { name: "Teicoplanin", halfLife: 70, unit: "hours", category: "Glycopeptide", tdm: true, renalAdjust: true },
            { name: "Ciprofloxacin", halfLife: 4, unit: "hours", category: "Fluoroquinolone", tdm: false, renalAdjust: true },
            { name: "Levofloxacin", halfLife: 7, unit: "hours", category: "Fluoroquinolone", tdm: false, renalAdjust: true },
            { name: "Ofloxacin", halfLife: 6, unit: "hours", category: "Fluoroquinolone", tdm: false, renalAdjust: true },
            { name: "Norfloxacin", halfLife: 4, unit: "hours", category: "Fluoroquinolone", tdm: false, renalAdjust: true },
            { name: "Moxifloxacin", halfLife: 12, unit: "hours", category: "Fluoroquinolone", tdm: false, renalAdjust: false },
            { name: "Trimethoprim/Sulfamethoxazole", halfLife: 10, unit: "hours", category: "Sulfonamide", tdm: false, renalAdjust: true },
            { name: "Nitrofurantoin", halfLife: 0.5, unit: "hours", category: "Nitrofuran", tdm: false, renalAdjust: true },

            // Antivirals with Renal Adjustment
            { name: "Acyclovir", halfLife: 3, unit: "hours", category: "Antiviral", tdm: false, renalAdjust: true },
            { name: "Valacyclovir", halfLife: 3, unit: "hours", category: "Antiviral", tdm: false, renalAdjust: true },
            { name: "Ganciclovir", halfLife: 3.5, unit: "hours", category: "Antiviral", tdm: false, renalAdjust: true },
            { name: "Valganciclovir", halfLife: 4, unit: "hours", category: "Antiviral", tdm: false, renalAdjust: true },
            { name: "Foscarnet", halfLife: 3, unit: "hours", category: "Antiviral", tdm: true, renalAdjust: true },
            { name: "Cidofovir", halfLife: 17, unit: "hours", category: "Antiviral", tdm: false, renalAdjust: true },

            // Beta-blockers (Complete list)
            { name: "Metoprolol", halfLife: 4, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: false },
            { name: "Atenolol", halfLife: 7, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: true },
            { name: "Bisoprolol", halfLife: 12, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: true },
            { name: "Nebivolol", halfLife: 12, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: true },
            { name: "Acebutolol", halfLife: 4, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: true },
            { name: "Betaxolol", halfLife: 20, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: true },
            { name: "Esmolol", halfLife: 0.15, unit: "hours", category: "Beta-blocker (selective)", tdm: false, renalAdjust: false },
            { name: "Propranolol", halfLife: 4, unit: "hours", category: "Beta-blocker (non-selective)", tdm: false, renalAdjust: false },
            { name: "Nadolol", halfLife: 24, unit: "hours", category: "Beta-blocker (non-selective)", tdm: false, renalAdjust: true },
            { name: "Timolol", halfLife: 4, unit: "hours", category: "Beta-blocker (non-selective)", tdm: false, renalAdjust: true },
            { name: "Sotalol", halfLife: 12, unit: "hours", category: "Beta-blocker (non-selective)", tdm: false, renalAdjust: true },
            { name: "Pindolol", halfLife: 4, unit: "hours", category: "Beta-blocker (non-selective)", tdm: false, renalAdjust: true },
            { name: "Labetalol", halfLife: 6, unit: "hours", category: "Alpha/Beta-blocker", tdm: false, renalAdjust: false },
            { name: "Carvedilol", halfLife: 7, unit: "hours", category: "Alpha/Beta-blocker", tdm: false, renalAdjust: false },

            // Statins (Complete HMG-CoA reductase inhibitors)
            { name: "Atorvastatin", halfLife: 14, unit: "hours", category: "Statin", tdm: false, renalAdjust: false },
            { name: "Simvastatin", halfLife: 3, unit: "hours", category: "Statin", tdm: false, renalAdjust: false },
            { name: "Pravastatin", halfLife: 2, unit: "hours", category: "Statin", tdm: false, renalAdjust: true },
            { name: "Lovastatin", halfLife: 3, unit: "hours", category: "Statin", tdm: false, renalAdjust: false },
            { name: "Fluvastatin", halfLife: 1.2, unit: "hours", category: "Statin", tdm: false, renalAdjust: false },
            { name: "Rosuvastatin", halfLife: 19, unit: "hours", category: "Statin", tdm: false, renalAdjust: true },
            { name: "Pitavastatin", halfLife: 12, unit: "hours", category: "Statin", tdm: false, renalAdjust: true },

            // ACE Inhibitors with Renal Adjustment
            { name: "Lisinopril", halfLife: 12, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },
            { name: "Enalapril", halfLife: 11, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },
            { name: "Captopril", halfLife: 2, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },
            { name: "Ramipril", halfLife: 17, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },
            { name: "Benazepril", halfLife: 11, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },
            { name: "Fosinopril", halfLife: 12, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: false },
            { name: "Quinapril", halfLife: 25, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },
            { name: "Perindopril", halfLife: 17, unit: "hours", category: "ACE Inhibitor", tdm: false, renalAdjust: true },

            // ARBs with Renal Considerations
            { name: "Losartan", halfLife: 2, unit: "hours", category: "ARB", tdm: false, renalAdjust: false },
            { name: "Valsartan", halfLife: 6, unit: "hours", category: "ARB", tdm: false, renalAdjust: false },
            { name: "Irbesartan", halfLife: 15, unit: "hours", category: "ARB", tdm: false, renalAdjust: false },
            { name: "Candesartan", halfLife: 9, unit: "hours", category: "ARB", tdm: false, renalAdjust: true },
            { name: "Olmesartan", halfLife: 13, unit: "hours", category: "ARB", tdm: false, renalAdjust: true },
            { name: "Telmisartan", halfLife: 24, unit: "hours", category: "ARB", tdm: false, renalAdjust: false },

            // Diuretics with Renal Adjustment
            { name: "Furosemide", halfLife: 2, unit: "hours", category: "Loop Diuretic", tdm: false, renalAdjust: true },
            { name: "Bumetanide", halfLife: 1.5, unit: "hours", category: "Loop Diuretic", tdm: false, renalAdjust: true },
            { name: "Torsemide", halfLife: 4, unit: "hours", category: "Loop Diuretic", tdm: false, renalAdjust: true },
            { name: "Hydrochlorothiazide", halfLife: 8, unit: "hours", category: "Thiazide Diuretic", tdm: false, renalAdjust: true },
            { name: "Chlorthalidone", halfLife: 60, unit: "hours", category: "Thiazide-like Diuretic", tdm: false, renalAdjust: true },
            { name: "Indapamide", halfLife: 18, unit: "hours", category: "Thiazide-like Diuretic", tdm: false, renalAdjust: true },
            { name: "Spironolactone", halfLife: 20, unit: "hours", category: "Potassium-sparing Diuretic", tdm: false, renalAdjust: true },
            { name: "Amiloride", halfLife: 21, unit: "hours", category: "Potassium-sparing Diuretic", tdm: false, renalAdjust: true },

            // Antidiabetic medications with Renal Adjustment
            { name: "Metformin", halfLife: 5, unit: "hours", category: "Biguanide", tdm: false, renalAdjust: true },
            { name: "Glyburide", halfLife: 4, unit: "hours", category: "Sulfonylurea", tdm: false, renalAdjust: true },
            { name: "Glimepiride", halfLife: 9, unit: "hours", category: "Sulfonylurea", tdm: false, renalAdjust: true },
            { name: "Sitagliptin", halfLife: 12, unit: "hours", category: "DPP-4 Inhibitor", tdm: false, renalAdjust: true },
            { name: "Saxagliptin", halfLife: 2.5, unit: "hours", category: "DPP-4 Inhibitor", tdm: false, renalAdjust: true },
            { name: "Linagliptin", halfLife: 12, unit: "hours", category: "DPP-4 Inhibitor", tdm: false, renalAdjust: false },
            { name: "Alogliptin", halfLife: 21, unit: "hours", category: "DPP-4 Inhibitor", tdm: false, renalAdjust: true },

            // H2 Blockers with Renal Adjustment
            { name: "Ranitidine", halfLife: 3, unit: "hours", category: "H2 Antagonist", tdm: false, renalAdjust: true },
            { name: "Famotidine", halfLife: 3, unit: "hours", category: "H2 Antagonist", tdm: false, renalAdjust: true },
            { name: "Cimetidine", halfLife: 2, unit: "hours", category: "H2 Antagonist", tdm: false, renalAdjust: true },
            { name: "Nizatidine", halfLife: 2, unit: "hours", category: "H2 Antagonist", tdm: false, renalAdjust: true },

            // Anticoagulants/Antiplatelets with Renal Considerations
            { name: "Warfarin", halfLife: 40, unit: "hours", category: "Anticoagulant", tdm: true, renalAdjust: false },
            { name: "Dabigatran", halfLife: 14, unit: "hours", category: "Direct Thrombin Inhibitor", tdm: false, renalAdjust: true },
            { name: "Rivaroxaban", halfLife: 9, unit: "hours", category: "Factor Xa Inhibitor", tdm: false, renalAdjust: true },
            { name: "Apixaban", halfLife: 12, unit: "hours", category: "Factor Xa Inhibitor", tdm: false, renalAdjust: true },
            { name: "Edoxaban", halfLife: 12, unit: "hours", category: "Factor Xa Inhibitor", tdm: false, renalAdjust: true },
            { name: "Enoxaparin", halfLife: 4.5, unit: "hours", category: "Low Molecular Weight Heparin", tdm: false, renalAdjust: true },

            // Cardiovascular continued
            { name: "Digoxin", halfLife: 36, unit: "hours", category: "Cardiac Glycoside", tdm: true, renalAdjust: true },
            { name: "Amiodarone", halfLife: 25, unit: "days", category: "Antiarrhythmic", tdm: true, renalAdjust: false },
            { name: "Quinidine", halfLife: 6, unit: "hours", category: "Antiarrhythmic", tdm: true, renalAdjust: true },
            { name: "Procainamide", halfLife: 3, unit: "hours", category: "Antiarrhythmic", tdm: true, renalAdjust: true },
            { name: "Lidocaine", halfLife: 2, unit: "hours", category: "Antiarrhythmic", tdm: true, renalAdjust: false },
            { name: "Flecainide", halfLife: 20, unit: "hours", category: "Antiarrhythmic", tdm: true, renalAdjust: true },
            { name: "Propafenone", halfLife: 6, unit: "hours", category: "Antiarrhythmic", tdm: false, renalAdjust: true },

            // Calcium Channel Blockers
            { name: "Amlodipine", halfLife: 35, unit: "hours", category: "Calcium Channel Blocker", tdm: false, renalAdjust: false },
            { name: "Nifedipine", halfLife: 2.5, unit: "hours", category: "Calcium Channel Blocker", tdm: false, renalAdjust: false },
            { name: "Diltiazem", halfLife: 4, unit: "hours", category: "Calcium Channel Blocker", tdm: false, renalAdjust: false },
            { name: "Verapamil", halfLife: 7, unit: "hours", category: "Calcium Channel Blocker", tdm: false, renalAdjust: false },
            { name: "Felodipine", halfLife: 16, unit: "hours", category: "Calcium Channel Blocker", tdm: false, renalAdjust: false },
            { name: "Isradipine", halfLife: 8, unit: "hours", category: "Calcium Channel Blocker", tdm: false, renalAdjust: false },

            // Antiepileptics
            { name: "Phenytoin", halfLife: 24, unit: "hours", category: "Antiepileptic", tdm: true, renalAdjust: false },
            { name: "Carbamazepine", halfLife: 12, unit: "hours", category: "Antiepileptic", tdm: true, renalAdjust: false },
            { name: "Valproic Acid", halfLife: 12, unit: "hours", category: "Antiepileptic", tdm: true, renalAdjust: false },
            { name: "Lamotrigine", halfLife: 25, unit: "hours", category: "Antiepileptic", tdm: true, renalAdjust: false },
            { name: "Levetiracetam", halfLife: 7, unit: "hours", category: "Antiepileptic", tdm: false, renalAdjust: true },
            { name: "Gabapentin", halfLife: 6, unit: "hours", category: "Antiepileptic", tdm: false, renalAdjust: true },
            { name: "Pregabalin", halfLife: 6, unit: "hours", category: "Antiepileptic", tdm: false, renalAdjust: true },
            { name: "Topiramate", halfLife: 21, unit: "hours", category: "Antiepileptic", tdm: false, renalAdjust: true },

            // Immunosuppressants
            { name: "Cyclosporine", halfLife: 8, unit: "hours", category: "Immunosuppressant", tdm: true, renalAdjust: false },
            { name: "Tacrolimus", halfLife: 12, unit: "hours", category: "Immunosuppressant", tdm: true, renalAdjust: false },
            { name: "Sirolimus", halfLife: 62, unit: "hours", category: "Immunosuppressant", tdm: true, renalAdjust: false },
            { name: "Mycophenolate", halfLife: 18, unit: "hours", category: "Immunosuppressant", tdm: true, renalAdjust: true },
            { name: "Azathioprine", halfLife: 3, unit: "hours", category: "Immunosuppressant", tdm: false, renalAdjust: true },

            // Psychiatrics
            { name: "Lithium", halfLife: 24, unit: "hours", category: "Mood Stabilizer", tdm: true, renalAdjust: true },
            { name: "Sertraline", halfLife: 26, unit: "hours", category: "SSRI", tdm: false, renalAdjust: false },
            { name: "Fluoxetine", halfLife: 4, unit: "days", category: "SSRI", tdm: false, renalAdjust: false },
            { name: "Paroxetine", halfLife: 21, unit: "hours", category: "SSRI", tdm: false, renalAdjust: false },
            { name: "Venlafaxine", halfLife: 5, unit: "hours", category: "SNRI", tdm: false, renalAdjust: true },
            { name: "Amitriptyline", halfLife: 20, unit: "hours", category: "TCA", tdm: true, renalAdjust: false },
            { name: "Nortriptyline", halfLife: 28, unit: "hours", category: "TCA", tdm: true, renalAdjust: false },

            // Others requiring renal adjustment
            { name: "Allopurinol", halfLife: 2, unit: "hours", category: "Xanthine Oxidase Inhibitor", tdm: false, renalAdjust: true },
            { name: "Colchicine", halfLife: 9, unit: "hours", category: "Anti-gout", tdm: false, renalAdjust: true },
            { name: "Theophylline", halfLife: 8, unit: "hours", category: "Bronchodilator", tdm: true, renalAdjust: false },
            { name: "Acetaminophen", halfLife: 2, unit: "hours", category: "Analgesic", tdm: false, renalAdjust: false },
            { name: "Morphine", halfLife: 3, unit: "hours", category: "Opioid", tdm: false, renalAdjust: true },
            { name: "Codeine", halfLife: 3, unit: "hours", category: "Opioid", tdm: false, renalAdjust: true },
            { name: "Tramadol", halfLife: 6, unit: "hours", category: "Opioid", tdm: false, renalAdjust: true },
            { name: "Methadone", halfLife: 24, unit: "hours", category: "Opioid", tdm: true, renalAdjust: false },

            // Azithromycin and other macrolides
            { name: "Azithromycin", halfLife: 68, unit: "hours", category: "Macrolide", tdm: false, renalAdjust: false },
            { name: "Clarithromycin", halfLife: 5, unit: "hours", category: "Macrolide", tdm: false, renalAdjust: true },
            { name: "Erythromycin", halfLife: 2, unit: "hours", category: "Macrolide", tdm: false, renalAdjust: true },

            // Additional antibiotics
            { name: "Doxycycline", halfLife: 18, unit: "hours", category: "Tetracycline", tdm: false, renalAdjust: false },
            { name: "Minocycline", halfLife: 16, unit: "hours", category: "Tetracycline", tdm: false, renalAdjust: true },
            { name: "Tetracycline", halfLife: 8, unit: "hours", category: "Tetracycline", tdm: false, renalAdjust: true },
            { name: "Clindamycin", halfLife: 3, unit: "hours", category: "Lincosamide", tdm: false, renalAdjust: false },
            { name: "Metronidazole", halfLife: 8, unit: "hours", category: "Nitroimidazole", tdm: false, renalAdjust: true },
            { name: "Linezolid", halfLife: 5.5, unit: "hours", category: "Oxazolidinone", tdm: false, renalAdjust: true }
        ];
    }

    searchDrugs(query) {
        if (!query || query.length < 2) return [];
        
        const normalizedQuery = query.toLowerCase().trim();
        return this.drugs
            .filter(drug => drug.name.toLowerCase().includes(normalizedQuery))
            .sort((a, b) => {
                // Prioritize exact matches and starts-with matches
                const aStartsWith = a.name.toLowerCase().startsWith(normalizedQuery);
                const bStartsWith = b.name.toLowerCase().startsWith(normalizedQuery);
                
                if (aStartsWith && !bStartsWith) return -1;
                if (!aStartsWith && bStartsWith) return 1;
                
                return a.name.localeCompare(b.name);
            })
            .slice(0, 10); // Increased to 10 suggestions
    }

    getDrug(name) {
        return this.drugs.find(drug => drug.name.toLowerCase() === name.toLowerCase());
    }

    getDrugsByCategory(category) {
        return this.drugs.filter(drug => drug.category.toLowerCase().includes(category.toLowerCase()));
    }

    getRenalAdjustmentDrugs() {
        return this.drugs.filter(drug => drug.renalAdjust);
    }

    getTDMDrugs() {
        return this.drugs.filter(drug => drug.tdm);
    }
}

class SteadyStateCalculator {
    constructor() {
        this.drugDatabase = new DrugDatabase();
        this.selectedDrug = null;
        this.currentSuggestionIndex = -1;
        this.initializeEventListeners();
        this.hideResults();
    }

    initializeEventListeners() {
        const calculateBtn = document.getElementById('calculateBtn');
        const halfLifeInput = document.getElementById('halfLife');
        const drugNameInput = document.getElementById('drugName');
        
        calculateBtn.addEventListener('click', () => this.calculateSteadyState());
        
        // Allow Enter key to trigger calculation
        halfLifeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calculateSteadyState();
            }
        });

        // Drug name autocomplete
        drugNameInput.addEventListener('input', (e) => this.handleDrugSearch(e.target.value));
        drugNameInput.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
        drugNameInput.addEventListener('blur', () => {
            // Delay hiding suggestions to allow for click events
            setTimeout(() => this.hideSuggestions(), 150);
        });
        drugNameInput.addEventListener('focus', (e) => {
            if (e.target.value.length >= 2) {
                this.handleDrugSearch(e.target.value);
            }
        });

        // Clear drug selection when half-life is manually changed
        halfLifeInput.addEventListener('input', () => {
            if (this.selectedDrug) {
                this.clearDrugSelection();
            }
        });
    }

    handleDrugSearch(query) {
        const suggestions = this.drugDatabase.searchDrugs(query);
        this.showSuggestions(suggestions);
        this.currentSuggestionIndex = -1;
    }

    handleKeyboardNavigation(e) {
        const suggestionItems = document.querySelectorAll('.suggestion-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.currentSuggestionIndex = Math.min(this.currentSuggestionIndex + 1, suggestionItems.length - 1);
            this.highlightSuggestion();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.currentSuggestionIndex = Math.max(this.currentSuggestionIndex - 1, -1);
            this.highlightSuggestion();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (this.currentSuggestionIndex >= 0 && suggestionItems[this.currentSuggestionIndex]) {
                const drugName = suggestionItems[this.currentSuggestionIndex].querySelector('.drug-name').textContent;
                this.selectDrug(drugName);
            } else {
                this.calculateSteadyState();
            }
        } else if (e.key === 'Escape') {
            this.hideSuggestions();
            this.currentSuggestionIndex = -1;
        }
    }

    highlightSuggestion() {
        const suggestionItems = document.querySelectorAll('.suggestion-item');
        suggestionItems.forEach((item, index) => {
            item.classList.toggle('highlighted', index === this.currentSuggestionIndex);
        });
    }

    showSuggestions(suggestions) {
        const dropdown = document.getElementById('drugSuggestions');
        
        if (suggestions.length === 0) {
            this.hideSuggestions();
            return;
        }

        dropdown.innerHTML = suggestions.map(drug => {
            const badges = [];
            if (drug.tdm) badges.push('<span class="tdm-badge">TDM</span>');
            if (drug.renalAdjust) badges.push('<span class="renal-badge">Renal Adj</span>');
            
            return `
                <div class="suggestion-item" onclick="calculator.selectDrug('${drug.name}')">
                    <span class="drug-name">${drug.name}</span>
                    <div class="drug-info">
                        <span class="drug-category">${drug.category}</span>
                        <div class="drug-badges">
                            ${badges.join('')}
                            <span class="half-life-info">${drug.halfLife} ${drug.unit}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        dropdown.style.display = 'block';
    }

    hideSuggestions() {
        const dropdown = document.getElementById('drugSuggestions');
        dropdown.style.display = 'none';
        this.currentSuggestionIndex = -1;
    }

    selectDrug(drugName) {
        const drug = this.drugDatabase.getDrug(drugName);
        if (!drug) return;

        this.selectedDrug = drug;
        
        // Update input fields
        document.getElementById('drugName').value = drug.name;
        document.getElementById('halfLife').value = drug.halfLife;
        document.getElementById('timeUnit').value = drug.unit;
        
        // Show source information
        this.showHalfLifeSource(drug);
        
        // Hide suggestions
        this.hideSuggestions();
        
        // Remove any existing errors
        this.removeError();
    }

    showHalfLifeSource(drug) {
        const sourceDiv = document.getElementById('halfLifeSource');
        let html = `<strong>📊 Database Value:</strong> ${drug.name} (${drug.category})<br>`;
        
        const features = [];
        if (drug.tdm) features.push('Therapeutic Drug Monitoring recommended');
        if (drug.renalAdjust) features.push('Requires renal dose adjustment');
        
        if (features.length > 0) {
            html += `<strong>Clinical Notes:</strong> ${features.join('; ')}`;
        }
        
        sourceDiv.innerHTML = html;
        sourceDiv.classList.add('show');
    }

    clearDrugSelection() {
        this.selectedDrug = null;
        const sourceDiv = document.getElementById('halfLifeSource');
        sourceDiv.classList.remove('show');
    }

    hideResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'none';
    }

    showResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    validateInput() {
        const halfLife = parseFloat(document.getElementById('halfLife').value);
        
        if (!halfLife || halfLife <= 0) {
            this.showError('Please enter a valid half-life value greater than 0');
            return false;
        }
        
        if (halfLife > 1000) {
            this.showError('Half-life value seems unusually high. Please verify.');
            return false;
        }
        
        return true;
    }

    showError(message) {
        let errorDiv = document.getElementById('errorMessage');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'errorMessage';
            errorDiv.style.cssText = `
                background: #fed7d7;
                color: #c53030;
                padding: 12px;
                border-radius: 8px;
                margin: 10px 0;
                border-left: 4px solid #e53e3e;
                font-weight: 500;
            `;
            document.querySelector('.calculator-section').appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        errorDiv.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            if (errorDiv) {
                errorDiv.remove();
            }
        }, 5000);
    }

    removeError() {
        const errorDiv = document.getElementById('errorMessage');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    convertToHours(value, unit) {
        switch (unit) {
            case 'minutes':
                return value / 60;
            case 'hours':
                return value;
            case 'days':
                return value * 24;
            default:
                return value;
        }
    }

    formatTime(hours) {
        if (hours < 1) {
            const minutes = Math.round(hours * 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        } else if (hours < 24) {
            const roundedHours = Math.round(hours * 10) / 10;
            return `${roundedHours} hour${roundedHours !== 1 ? 's' : ''}`;
        } else {
            const days = Math.round(hours / 24 * 10) / 10;
            const remainingHours = Math.round(hours % 24);
            if (remainingHours === 0) {
                return `${days} day${days !== 1 ? 's' : ''}`;
            } else {
                return `${Math.floor(days)} day${Math.floor(days) !== 1 ? 's' : ''} ${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`;
            }
        }
    }

    getHalfLivesForSteadyState(percentage) {
        const multipliers = {
            90: 3.3,
            95: 4.3,
            97: 5.0,
            99: 6.6
        };
        return multipliers[percentage] || 5.0;
    }

    getClinicalInfo(drugName, steadyStateHours, percentage, selectedDrug) {
        let info = `At ${percentage}% steady state, the drug concentration will be relatively stable. `;
        
        if (steadyStateHours < 24) {
            info += "Steady state will be reached within the first day of therapy. ";
        } else if (steadyStateHours < 72) {
            info += "Steady state will be reached within 2-3 days of therapy. ";
        } else if (steadyStateHours < 168) {
            info += "Steady state will be reached within the first week of therapy. ";
        } else {
            info += "Steady state will take more than a week to achieve. Consider loading dose if appropriate. ";
        }
        
        if (selectedDrug) {
            if (selectedDrug.tdm) {
                info += "This drug requires therapeutic drug monitoring (TDM). ";
            }
            if (selectedDrug.renalAdjust) {
                info += "Dose adjustment may be needed in renal impairment. ";
            }
        }
        
        info += "This is the optimal time for therapeutic drug monitoring and dosage adjustments.";
        
        if (drugName) {
            info = `For ${drugName}: ` + info;
        }
        
        return info;
    }

    calculateSteadyState() {
        this.removeError();
        
        if (!this.validateInput()) {
            return;
        }

        const drugName = document.getElementById('drugName').value.trim();
        const halfLifeValue = parseFloat(document.getElementById('halfLife').value);
        const timeUnit = document.getElementById('timeUnit').value;
        const steadyStateLevel = parseInt(document.getElementById('steadyStateLevel').value);

        const halfLifeHours = this.convertToHours(halfLifeValue, timeUnit);
        const halfLivesMultiplier = this.getHalfLivesForSteadyState(steadyStateLevel);
        const steadyStateHours = halfLifeHours * halfLivesMultiplier;

        // Update results
        document.getElementById('steadyStateTime').textContent = this.formatTime(steadyStateHours);
        document.getElementById('halfLivesCount').textContent = `${halfLivesMultiplier} half-lives`;
        document.getElementById('steadyStatePercent').textContent = `${steadyStateLevel}%`;
        
        // Show selected drug info if available
        const selectedDrugInfo = document.getElementById('selectedDrugInfo');
        const selectedDrugName = document.getElementById('selectedDrugName');
        if (this.selectedDrug) {
            selectedDrugName.textContent = `${this.selectedDrug.name} (${this.selectedDrug.category})`;
            selectedDrugInfo.style.display = 'flex';
        } else {
            selectedDrugInfo.style.display = 'none';
        }
        
        // Update clinical information
        const clinicalInfo = this.getClinicalInfo(drugName, steadyStateHours, steadyStateLevel, this.selectedDrug);
        document.getElementById('clinicalInfo').textContent = clinicalInfo;

        this.showResults();
        
        // Add animation effect
        const resultCard = document.querySelector('.result-card');
        resultCard.style.transform = 'scale(0.95)';
        resultCard.style.opacity = '0.7';
        
        setTimeout(() => {
            resultCard.style.transform = 'scale(1)';
            resultCard.style.opacity = '1';
            resultCard.style.transition = 'all 0.3s ease';
        }, 100);
    }
}

// Initialize the calculator when the page loads
let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new SteadyStateCalculator();
    
    // Add some additional interactivity
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Service Worker Registration for PWA functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('SteadyCheck Enhanced loaded successfully with comprehensive drug database');
        console.log(`Database contains ${calculator.drugDatabase.drugs.length} medications`);
        console.log(`Renal adjustment drugs: ${calculator.drugDatabase.getRenalAdjustmentDrugs().length}`);
        console.log(`TDM drugs: ${calculator.drugDatabase.getTDMDrugs().length}`);
    });
}