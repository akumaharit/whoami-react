const { google } = require('googleapis');

async function getSheetData(input_category) {
    // Load the credentials
    const client_email = 'harit-240@teak-backup-377916.iam.gserviceaccount.com';
    const private_key = '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCU4j7G6XrHVFpo\nrm0A+d3MUeP8MqVmRlvB9bBTOA5iZ5yp+EayMZB1fteCIx90Sh6Kb3+DvW5kqdz6\nQZntI1CehgWWKL67mA01hh/jL9yAbyILyQfjg3lgYGNEbO4REDmtDgBaQ7BvY5gM\nSQuXv1F4O3tsWGKhbFPwYFWoGc+N62nbi6G9DBrVcU4FDAHTYpvF/uqesnJ6Dklb\nI7sMcYudI89Z0Z+EOS/o/mfyE3wOzLnZpjH7frclk1fVOeUs5kFfVlnf5bYHilJD\nuNFHnnRKIIlggFm0/RwaXmWnDTkewq9A/TKn/gpPFpo91FVfRPLbYkdht/b1R1Mr\ns4GvgH5LAgMBAAECggEAR9nYCg7rnf7rktF68ZmknNJ4gGHAyNbzuWtkqQTIjF0M\nkkqrc5vP56RLRRbGO0z56D1fAKkO+a2wY2X9byA37Akp8QnA4q/C0C3mfbG/bIw1\nlhJyqC3vCb/6qC8ZxUpbS1USfn1kTJ1355Xo7lb6blfmfKc7EkRBTiRvsiyiqg5R\n/3BJ99ePvYfZ8gHPUXRJeESZOt6qZEjCNjKo3BfP0IXj7OzyrVaZZL08QqXjtNHo\nYSLKlN4Sm8iXFryEtpxTl4tRkzplWg2fq2MtMPv9LHg/M6ckBRMR0oyQPAuat6uT\nBERQD3WlVeov0X8Y2eCM5hUTjpRfJ//BhCDxRG004QKBgQDKGGv24rhxUvYpBflE\nOUVoRU8Aok7d12GtsavU4rR9XoFM6MDPXMalFaoNBW8wJeO+sMG5bJCkkTGvCL5m\n4lq9ZhCGcICbvgx3vdHbXNwsaQQk/bVKlJsNNLmQ9tJ5ymbRwi/4brPZrw8y+igM\nM6eT36Kd0LYoSEG8WI9c+MDlZwKBgQC8mGaXt6Oq5J38WVcsbqsNAK/FuolJ858/\nsGwW3gE1atjdp86bTB6ZwaF3tTp4smANO8ZMZlMfnL2265lp3mZDzgbYRV7huM9U\nvFYSV5lGWpuiSlR/2/qoL6MPWXZMLDGPVwyFRilrKkeoDVJj1zK7sCJEfXwUL1h1\n3dZ+WlvNfQKBgCEbPxSCr5Rg8tJlmCAFAcnDEN4ZuLG+xtGdeXi2arre8G+Y8X0G\nxcPleKYJbd2FV3m1mwa1MjzDTFBQLmDMU/ES90IOzAK3b3NuNSKqY6cizPsCVOCS\n15OiP4Pv6yrobU+PcCxSdkQC2YqQUF8vVxRyXkFcH3sZ2yrvlwyz82WhAoGAd++7\nntSsgyusxSTT6W/f2/8JyYddc+g46Dn8I3a/8ganMB9dpyl7dHDNjOF18/gMWZ4f\n98pDJqF5jPC7ubYz9v75H2TOeGIdiFfVrQiEc1eADm+S2VU+TOMuob5VGxAn3G6R\nidga0woqU9dVBCWBIBddU40x8WxCp4KSu/we0ckCgYAeyUF+iDUI3afcgwtEUJ1Q\naxKQ+ONuOwH/+TWBdvmWgCD8/gId30hQ14NSme2jOGjQh/cDLLblOd3stGdnI5Wf\n18feN7vxwzD3hPwDs0dP3gAKZVfSRTRvQnZUzw58zHLqPegzhd1UmrBTGnxnv72A\nPYfq8RUNhyMeiTTmaBSeBw==\n-----END PRIVATE KEY-----\n';
    const sheet_id = '1fdy5BlT8vnAf6S1YamnUYQJLA8tuBVrwDcupeSGbnHY';

    // Create a new JWT client using the credentials
    const jwtClient = new google.auth.JWT(
        client_email,
        null,
        private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );

    // Authorize the client
    
    function fetchData(callback) {
        jwtClient.authorize((err, tokens) => {
          if (err) {
            console.error('Error authenticating:', err);
            return;
          }
          const sheets = google.sheets({ version: 'v4', auth: jwtClient });
          const range = 'Sheet1!A1:Z60';
          sheets.spreadsheets.values.get(
            {
              spreadsheetId: sheet_id,
              range: range,
            },
            (err, res) => {
              if (err) {
                console.error('Error fetching data:', err);
                return;
              }
              const output = res.data.values;
              callback(output);
            }
          );
        });
    }
      
    const values = await new Promise((resolve) => {
        fetchData((data) => {
          //console.log(data); // This will log your data
          resolve(data);
        });
    });
    //console.log(values);

    let input_category_index;
    for(let i = 0; i < values.length; i++){
        //console.log(values[0][i]);
        if(values[0][i] === input_category){
            input_category_index = i;
            break;
        }
    }
    //console.log(input_category_index);

    //Create an output list of the input_category_index
    let output_list = [];
    for(let i = 1; i < values.length; i++){
        if(values[i][input_category_index] === undefined){
            continue;
        }
        output_list.push(values[i][input_category_index]);
    }
    //console.log(output_list);
    return output_list;
}

const data = await getSheetData('Animal');
console.log(data)