dawaAutocomplete.dawaAutocomplete( document.getElementById("adresse"), {
  select: function(selected) {
    document.getElementById("valgtadresse").innerHTML= selected.tekst;
    console.log(selected.tekst)
    const currentAddress = selected.tekst.split(",")

      const addressToSave = {}
      addressToSave.street = currentAddress[0]
      addressToSave.zipcode = currentAddress[1]
      addressToSave.city = currentAddress[2]
      addressToSave.additionalInfomation = currentAddress[3]

  }
});