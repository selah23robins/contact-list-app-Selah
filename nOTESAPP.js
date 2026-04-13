import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// Starter contact data (hardcoded list)
const contacts = [
  { id: '1', name: 'Alice Johnson', phone: '555-0101' },
  { id: '2', name: 'Bob Martinez', phone: '555-0102' },
  { id: '3', name: 'Carol White', phone: '555-0103' },
  { id: '4', name: 'David Lee', phone: '555-0104' },
  { id: '5', name: 'Eva Brown', phone: '555-0105' },
  { id: '6', name: 'Frank Wilson', phone: '555-0106' },
  { id: '7', name: 'Grace Kim', phone: '555-0107' },
  { id: '8', name: 'Henry Davis', phone: '555-0108' },
];

export default function App() {
  // Stores the current text typed in the search bar (controlled input)
  const [query, setQuery] = useState('');

  // Filters contacts based on search query (case-insensitive)
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  // Renders each contact row in the FlatList
  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        index % 2 === 0 ? styles.evenRow : styles.oddRow
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      {/* App Title */}
      <Text style={styles.title}>My Contacts</Text>

      {/* Controlled TextInput for searching contacts */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search contacts..."
        value={query}
        onChangeText={text => setQuery(text)}
      />

      {/* Contact count display */}
      <Text style={styles.count}>
        Showing {filteredContacts.length} of {contacts.length} contacts
      </Text>

      {/* FlatList renders only visible items (efficient for lists) */}
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No contacts found</Text>
        }
      />
    </View>
  );
}

// Styles for layout and UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  count: {
    marginBottom: 10,
    fontSize: 14,
    color: '#555',
  },
  row: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  evenRow: {
    backgroundColor: '#ffffff',
  },
  oddRow: {
    backgroundColor: '#e9e9e9',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});