//
//  ViewController.swift
//  Calculator
//
//  Created by leanhvu on 3/24/21.
//  Copyright © 2021 leanhvu. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBOutlet weak var lblResult: UILabel!
    var check:Bool = true
    @IBAction func btnPress(_ sender: UIButton) {
        if check == true {
            if sender.currentTitle! != "0" {
                lblResult.text = sender.currentTitle!
                check = false
            }
        } else if check == false {
            lblResult.text = lblResult.text! + sender.currentTitle!
        }
    }

}

