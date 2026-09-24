Feature: 99.co Homepage Verification

  Scenario: User verifies search bar on 99.co homepage
    Given User opens the 99.co application
    Then User should see the search section on homepage

  Scenario: User searches for a property location
    Given User opens the 99.co application
    When User clicks on the search bar
    Then User types "Jakarta Barat" in search bar

  Scenario: User navigates through bottom menu tabs
    Given User opens the 99.co application
    When User clicks on "Hunian Baru" tab
    Then User clicks on "Akun Saya" tab